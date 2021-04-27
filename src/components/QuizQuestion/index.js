import React from 'react';
import { QuizAnswer } from '..';

function QuizQuestion({ question, wrongAnswers, correctAnswer, submitAnswer }) {

    const renderAnswers = () => {
        wrongAnswers.push(correctAnswer);
        const answers = shuffle(wrongAnswers);
        let i = 0;
        return answers.map(a =>
            a == correctAnswer ? <QuizAnswer value={a} correct={true} submitAnswer={submitAnswer} key={i++}/> : 
            <QuizAnswer value={a} correct={false} submitAnswer={submitAnswer} key={i++}/>
        );
    };

    // Durstenfeld shuffle
    const shuffle = (answers) => {
        for (let x = answers.length - 1; x > 0; x--) {
            const y = Math.floor(Math.random() * (x + 1));
            let point = answers[x];
            answers[x] = answers[y];
            answers[y] = point;
        }
        return answers;
    }

    return (
        <div id="quizQuestion">
            <h2>{question}</h2>
            {renderAnswers()}
        </div>
    );
};

export default QuizQuestion;
