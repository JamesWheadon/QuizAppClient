import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { QuizQuestion } from '../../components';
import { updatePlayerScore, sendScore } from "../../actions";

const Quiz = ({finishQuiz}) => {

    const [questionNumber, setQuestionNumber] = useState(0);
    const [score, setScore] = useState(0);

    const dispatch = useDispatch();
    const history = useHistory();

    const quiz = useSelector(state => state.quiz);
    const questions = useSelector(state => state.questions);
    const user = useSelector(state => state.user);

    const renderResults = () => {
        finishQuiz();
        dispatch(sendScore(quiz.id, user.name, user.score))
        history.push('/winners')
    }
    
    const submitAnswer = (e) => {
        if (e.target.value === "true") {
            dispatch(updatePlayerScore());
            setScore(prevState => prevState + 1);
        }
        if (questionNumber != questions.length - 1) {
            setQuestionNumber(prevState => prevState + 1);
        }
        else {
            renderResults();
        }
    }

    const renderQuestions = () => {
        const question = questions[questionNumber];
        return <QuizQuestion question={question.question} wrongAnswers={question.incorrect_answers} correctAnswer={question.correct_answer} submitAnswer={submitAnswer} />
    }

    return (
        <>
            {renderQuestions()}
        </>
    )
}

export default Quiz;