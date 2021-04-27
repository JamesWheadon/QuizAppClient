import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Home, StartQuiz, Login, Highscores, Quiz } from './pages';
import { Header, Footer } from './layout';
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function App() {
    const [users, setUsers] = useState([])
    const [messages, setMessages] = useState([])
    socket.on('admin-message', msg => console.log(msg));

    const joinRoom = (e) => {
        const data = { username: e.username, room: e.room };
        socket.emit('request-join-game', data);
    }

    const sendMessage = (message) => {
        socket.emit('chat-message', message);
    }

    socket.on('all-players', data => setUsers(data.roomUsernames));
    socket.on('new-chat-message', m => {
        let copy = [...messages];
        copy.push(m);
        setMessages(copy);
    });

    const questions = [
        {
        question: "When was the Declaration of Independence approved by the Second Continental Congress?",
        correct_answer: "July 4, 1776",
        incorrect_answers: [
        "May 4, 1776",
        "June 4, 1776",
        "July 2, 1776"
        ]
        },
        {
        question: "In what sport is a &quot;shuttlecock&quot; used?",
        correct_answer: "Badminton",
        incorrect_answers: [
        "Table Tennis",
        "Rugby",
        "Cricket"
        ]
        },
        {
        question: "Which of the following buildings is example of a structure primarily built in the Art Deco architectural style?",
        correct_answer: "Niagara Mohawk Building",
        incorrect_answers: [
        "Taipei 101",
        "One Detroit Center",
        "Westendstrasse 1"
        ]
        },
        {
        question: "What Greek letter is used to signify summation?",
        correct_answer: "Sigma",
        incorrect_answers: [
        "Delta",
        "Alpha",
        "Omega"
        ]
        },
        {
        question: "How many total monsters appear in Monster Hunter Generations?",
        correct_answer: "105",
        incorrect_answers: [
        "100",
        "98",
        "73"
        ]
        }
        ]

    return (
        <div id="app">
            <NavBar />
            <main>
                <Switch>
                    <Route exact path = "/"><Home /></Route>
                    <Route path="/login"><Login /></Route>
                    <Route path="/startquiz"><StartQuiz joinRoom={joinRoom} sendMessage={sendMessage} users={users} messages={messages}/></Route>
                    <Route path="/highscores"><Highscores /></Route>
                    <Route path="/quiz"><Quiz questions={questions}/></Route>
                </Switch>
            </main>
            <Footer />
        </div>
    )
}

export default App ;

