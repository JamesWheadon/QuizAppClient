import React from 'react';

function ChatMessage({ username, message }) {

    return (
        <p role="message">{username}: {message}</p>
    );
};

export default ChatMessage;
