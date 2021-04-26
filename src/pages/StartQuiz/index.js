import React from 'react';
import { UsernameRoom } from '../../components';

const StartQuiz = ({ joinRoom }) => {
    return (
        <div>
            Hi
            {console.log(joinRoom)}
            <UsernameRoom joinRoom={joinRoom} />
        </div>
    )
}

export default StartQuiz;