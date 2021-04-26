import React from 'react';
import ReactDOM from 'react-dom';
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

socket.on('admin-message', msg => console.log(msg));


ReactDOM.render(
    <React.StrictMode>
        <h1>Welcome to Quizards</h1>
    </React.StrictMode>,
    document.getElementById('root')
);