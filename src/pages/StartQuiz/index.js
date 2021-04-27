import React from 'react';
import { UsernameRoom, RoomUser, RoomChat } from '../../components';

const StartQuiz = ({ joinRoom, users }) => {

    const renderUsers = () => {
        console.log(users)
        return users.map(user => 
            <RoomUser username={user} key={users.indexOf(user)}/>
        );
    };

    return (
        <div>
            Hi
            <UsernameRoom joinRoom={joinRoom} />
            {renderUsers()}
            <RoomChat />
        </div>
    )
}

export default StartQuiz;