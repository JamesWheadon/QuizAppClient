import React from 'react';
import { useDispatch } from "react-redux";

import { UsernameRoom, RoomUser, RoomChat, QuizForm } from '../../components';
import { fetchQuestions } from "../../actions";

const StartQuiz = ({ joinRoom, sendMessage, users, messages }) => {

    users = [{id: 1 , name:"Bob"}, {id: 2 , name:"Charlie"}]; // mock user for testing

    const dispatch = useDispatch();

    const handleFormSubmit = (input) => {
        input.users = users.map(u => u.id);
        dispatch(fetchQuestions(input));

    };

    const renderUsers = () => {
        return users.map(user =>
            <RoomUser username={user.name} key={user.id} />
        );
    };

    const renderRoom = () => {
        return (
            <>
                {renderUsers()}
                <RoomChat sendMessage={sendMessage} messages={messages} />
                <QuizForm handleFormSubmit={handleFormSubmit}/>
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