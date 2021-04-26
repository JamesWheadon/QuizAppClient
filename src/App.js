import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Home, StartQuiz, Login, Highscores } from './pages';
import { Header, Footer } from './layout';
import { io } from "socket.io-client";

function App() {

    const socket = io("http://localhost:3000");    
    socket.on('admin-message', msg => console.log(msg));

    const data = { username: "Steve", gameId: "Monkey" };
    socket.emit('request-join-game', data);
    

    joinGame = e => {
        e.preventDefault();
        const { username, room } = e.target;
        const data = { username: username.value, room: room.value };
        this.state.socket.emit('request-join-game', data);
    }

    return (
        <div id="app">
            <NavBar />
            <main>
                <Switch>
                    <Route exact path = "/"><Home /></Route>
                    <Route path="/login"><Login /></Route>
                    <Route path="/startquiz"><StartQuiz joinGame={joinGame}/></Route>
                    <Route path="/highscores"><Highscores /></Route>
                </Switch>
            </main>
            <Footer />
        </div>
    )
}

export default App ;
