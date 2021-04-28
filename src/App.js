import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Home, StartQuiz, Login, Highscores, Quiz, WinnersPage } from './pages';
import { Header, Footer } from './layout';
import { io } from "socket.io-client";

import "./App.css";

const socket = io("http://localhost:5001");

function App() {
    const [users, setUsers] = useState([])
    const [messages, setMessages] = useState([])
    socket.on('admin-message', msg => console.log(msg));

    const joinRoom = (data) => {
        // const data = { username: e.username, room: e.room };
        socket.emit('request-join-game', data);
    }

    const sendMessage = (message) => {
        socket.emit('chat-message', message);
    }

    socket.on('all-players', data => setUsers(data));
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
                    <Route exact path = "/"><Home /></Route>
                    <Route path="/login"><Login /></Route>
                    <Route path="/startquiz"><StartQuiz joinRoom={joinRoom} sendMessage={sendMessage} users={users} messages={messages}/></Route>
                    <Route path="/highscores"><Highscores /></Route>
                    <Route path="/quiz"><Quiz /></Route>
                    <Route path="/winners"><WinnersPage /></Route>
                </Switch>
            </main>
            <Footer />
        </div>
    )
}

export default App ;

