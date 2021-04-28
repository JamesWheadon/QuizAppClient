import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { NavBar } from './components';
import { Home, StartQuiz, Login, Highscores, Quiz } from './pages';
import { Header, Footer } from './layout';
import { io } from "socket.io-client";

import "./App.css";

const socket = io("http://localhost:5001");

function App() {
    const [users, setUsers] = useState([])
    const [messages, setMessages] = useState([])
    const dispatch = useDispatch();
    socket.on('admin-message', msg => console.log(msg));

    const joinRoom = (e) => {
        const data = { username: e.username, room: e.room };
        socket.emit('request-join-game', data);
    }

    const sendMessage = (message) => {
        socket.emit('chat-message', message);
    }

    const quizStart = (questions) => {
        socket.emit('quiz-start', questions);
    }

    socket.on('all-players', data => setUsers(data.roomUsernames));

    socket.on('quiz-questions', ({questions, quiz}) => {
        console.log(questions, quiz)
        //dispatch({
        //    type: 'LOAD_QUESTIONS',
        //    payload: { questions, quiz }
        //})
        //history.push('/quiz');
    })

    socket.on('new-chat-message', m => {
        let copy = [...messages];
        copy.push(m);
        setMessages(copy);
    });

    return (
        <div id="app">
            <Header />
            <main>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/login"><Login /></Route>
                    <Route path="/startquiz"><StartQuiz joinRoom={joinRoom} sendMessage={sendMessage} users={users} messages={messages} quizStart={quizStart} /></Route>
                    <Route path="/highscores"><Highscores /></Route>
                    <Route path="/quiz"><Quiz /></Route>
                </Switch>
            </main>
            <Footer />
        </div>
    )
}

export default App;

