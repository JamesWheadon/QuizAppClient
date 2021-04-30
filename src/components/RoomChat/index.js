import React, { useState } from 'react';
import { ChatMessage } from '..';
import './style.css';

function RoomChat({ sendMessage, messages }) {

    const [chatMessage, setChatMessage] = useState("")

    const renderMessages = () => {
        let i = 0;
        return messages.map(m =>
            <ChatMessage username={m.username} message={m.message} key={i++} />
        );
    };

    const handleSubmit = e => {
        e.preventDefault();
        sendMessage(chatMessage);
        setChatMessage('');
    }

    const updateMessageInput = e => {
        const input = e.target.value
        setChatMessage(input)
    }

    return (
        <div id="roomChat">
             <div className="chat-messages">
                {renderMessages()}
            </div>
            <form className ='chat-form' onSubmit={handleSubmit} role="form">
                <label htmlFor="chat-input">Chat: </label>
                <input id="chat-input" type="text" value={chatMessage} onChange={updateMessageInput} />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default RoomChat;
