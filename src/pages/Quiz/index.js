import React, { useState } from 'react';
import { QuizQuestion } from '../../components';

const Quiz = () => {

    const [questionNumber, setQuestionNumber] = useState(0);
    const [score, setScore] = useState(0);

    const renderResults = () => {
        console.log(score);
    }
    
    const submitAnswer = (e) => {
        if (e.target.value) {
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