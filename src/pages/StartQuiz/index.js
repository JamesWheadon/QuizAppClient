import React from 'react';
import { UsernameRoom, RoomUser, RoomChat, TopicSelector } from '../../components';

const StartQuiz = ({ joinRoom, sendMessage, users, messages }) => {

    const renderUsers = () => {
        return users.map(user => 
            <RoomUser username={user} key={users.indexOf(user)}/>
        );
    };

    const renderRoom =() => {
        return (
            <>
            {renderUsers()}
            <RoomChat sendMessage={sendMessage} messages={messages}/>
            <TopicSelector />
            </>
        )
    }

    return (
        <div>
            Hi
            {users.length === 0 ? <UsernameRoom joinRoom={joinRoom} /> : renderRoom()
            }
        </div>
    )
}

export default StartQuiz;