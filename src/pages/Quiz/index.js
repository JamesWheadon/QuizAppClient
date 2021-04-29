import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { QuizQuestion } from '../../components';
import { updatePlayerScore } from "../../actions";

const Quiz = ({finishQuiz}) => {

    const [questionNumber, setQuestionNumber] = useState(0);
    const [score, setScore] = useState(0);

    const dispatch = useDispatch();
    const history = useHistory();

    const questions = useSelector(state => state.questions);
    

    const renderResults = () => {
        finishQuiz();
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