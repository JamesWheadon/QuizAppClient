import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { UsernameRoom, RoomUser, RoomChat, QuizForm} from '../../components';
import { fetchQuestions } from "../../actions";

import './styles.css'

const StartQuiz = ({ joinRoom, sendMessage, users, messages, quizStart }) => {
    // users=[{name:"bob", id:"2"}] //test
    const dispatch = useDispatch();
    const history = useHistory();
    const questions = useSelector(state => state.questions);
    const quiz = useSelector(state => state.quiz);

    useEffect(() => {
        if (questions.length > 1) {
            quizStart({questions, quiz});
            history.push('/quiz');
        }
    }, [questions])

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
            {users.length === 0 ? <UsernameRoom joinRoom={joinRoom} /> : renderRoom()}
        </div>
    )
}

export default StartQuiz;