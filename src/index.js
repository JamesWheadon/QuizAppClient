import React from 'react';
import ReactDOM from 'react-dom';
import { io } from "socket.io-client";

const socket = io("http://localhost:3000/");


ReactDOM.render(
    <React.StrictMode>
        <h1>Welcome to Quizards</h1>
    </React.StrictMode>,
    document.getElementById('root')
);