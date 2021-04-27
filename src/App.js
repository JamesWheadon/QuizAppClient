import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Home, StartQuiz, Login, Highscores } from './pages';
import { Header, Footer } from './layout';
import { io } from "socket.io-client";

function App() {
    const [users, setUsers] = useState([])

    const socket = io("http://localhost:3000");
    socket.on('admin-message', msg => console.log(msg));
    

    const joinRoom = (e) => {
        const data = { username: e.username, room: e.room };
        socket.emit('request-join-game', data);
    }

    socket.on('all-players', data => setUsers(data.roomUsernames));

    return (
        <div id="app">
            <NavBar />
            <main>
                <Switch>
                    <Route exact path = "/"><Home /></Route>
                    <Route path="/login"><Login /></Route>
                    <Route path="/startquiz"><StartQuiz joinRoom={joinRoom} users={users}/></Route>
                    <Route path="/highscores"><Highscores /></Route>
                </Switch>
            </main>
            <Footer />
        </div>
    )
}

export default App ;
