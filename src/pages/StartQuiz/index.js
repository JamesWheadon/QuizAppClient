import React from 'react';
import { UsernameRoom, RoomUser, RoomChat } from '../../components';

const StartQuiz = ({ joinRoom, sendMessage, users, messages }) => {

    const renderUsers = () => {
        return users.map(user => 
            <RoomUser username={user} key={users.indexOf(user)}/>
        );
    };

    return (
        <div>
            Hi
            <UsernameRoom joinRoom={joinRoom} />
            {renderUsers()}
            <RoomChat sendMessage={sendMessage} messages={messages}/>
        </div>
    )
}

export default StartQuiz;