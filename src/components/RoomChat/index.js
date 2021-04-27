import React from 'react';
import { ChatMessage } from '..'

function RoomChat({ messages }) {

    const renderMessages = () => {
        let i = 0;
        return messages.map(m => 
            <ChatMessage username={m.username} message={m.message} key={i++}/>
        );
    };

    return (
        <div id="roomChat">
            {renderMessages()}
        </div>
    );
};

export default RoomChat;
