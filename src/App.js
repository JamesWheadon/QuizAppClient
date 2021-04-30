import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from './components';
import { Home, StartQuiz, Highscores, Quiz, WinnersPage } from './pages';
import { Header, Footer } from './layout';
import { io } from "socket.io-client";

import "./App.css";
import './Responsiveness.css'
const socket = io("https://quizards-socket.herokuapp.com/");

function App() {
    const [users, setUsers] = useState([])
    const [messages, setMessages] = useState([])
    const [finished, setFinished] = useState([]);
    const [done, setDone] = useState(false);
    
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user);

    socket.on('admin-message', msg => console.log(msg));

    const joinRoom = (data) => {
        socket.emit('request-join-game', data);
    }

    const sendMessage = (message) => {
        socket.emit('chat-message', message);
    }

    const quizStart = (questions) => {
        socket.emit('quiz-start', questions);
    }


    const finishQuiz = () => {
        
        setDone(true);
        
        console.log("Finishing quiz!");
    }

    useEffect(() => {
        if(done) socket.emit('quiz-finished', userData);
    }, [done]);

    socket.on('all-players', data => setUsers(data));

    socket.on('quiz-questions', ({ questions, quiz }) => {
        dispatch({
            type: 'LOAD_QUESTIONS',
            payload: { questions, quiz }
        })
        history.push('/quiz');
    })

    socket.on('new-chat-message', m => {
        let copy = [...messages];
        copy.push(m);
        setMessages(copy);
    });

    socket.on('room-full', () => {
        window.alert('This room is currently full');
    })

    socket.on('taken-username', () => {
        window.alert('This username is already taken');
    })

    socket.on('player-score', (user) => {
        console.log(user);
        let copy = [...finished];
        copy.push(user);
        setFinished(copy);
    })

    // console.log(finished);

    return (
        <>
            <header>
                <NavBar role="navigation" />
            </header>
            <main>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/startquiz"><StartQuiz joinRoom={joinRoom} sendMessage={sendMessage} users={users} messages={messages} quizStart={quizStart} /></Route>
                    <Route path="/highscores"><Highscores /></Route>
                    <Route path="/quiz"><Quiz finishQuiz={finishQuiz} /></Route>
                    <Route path="/winners"><WinnersPage users={finished} finished={users.length === finished.length} /></Route>
                </Switch>
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default App;

