import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { UsernameRoom, RoomUser, RoomChat, QuizForm } from '../../components';
import { fetchQuestions } from "../../actions";


import './styles.css'

const StartQuiz = ({ joinRoom, sendMessage, users, messages }) => {

    // users = [{ id: 1, name: "Bob" }, { id: 2, name: "Charlie" }]; // mock user for testing

    const dispatch = useDispatch();
    const history = useHistory();

    const handleFormSubmit = (input) => {
        input.users = users.map(u => u.id);
        dispatch(fetchQuestions(input));
        history.push('/quiz')
    };

    const renderUsers = () => {
        return users.map(user =>
            <RoomUser username={user.name} key={user.id} />
        );
    };

    const renderRoom = () => {
        return (
            <div className="waiting-room">              
                <div className="room-users">
                    <h2>Current Quizards:</h2>
                    {renderUsers()}

                </div>
                <div  className="room-chat">
                <RoomChat sendMessage={sendMessage} messages={messages} />
                </div>
                
                
                <div className="room-quiz-form">
                    <QuizForm handleFormSubmit={handleFormSubmit} />
                </div>
            </div>
        )
    }

    return (
        <div>
            {users.length === 0 ? <UsernameRoom joinRoom={joinRoom} /> : renderRoom()
            }
        </div>
    )
}

export default StartQuiz;