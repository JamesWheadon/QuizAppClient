import React, {useState, useEffect} from 'react';
import { QuizAnswer } from '..';

function QuizQuestion({ question, wrongAnswers, correctAnswer, submitAnswer }) {

    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        setAnswers(shuffle([...wrongAnswers, correctAnswer]));
    }, [question]);

    const renderAnswers = () => {
        return answers.map((a,i) =>
            a === correctAnswer ? <QuizAnswer value={a} correct={true} submitAnswer={submitAnswer} key={i}/> : 
            <QuizAnswer value={a} correct={false} submitAnswer={submitAnswer} key={i}/>
        );
    };

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
            <h2 dangerouslySetInnerHTML= {{__html: question}}></h2>
            {renderAnswers()}
        </div>
    );
};

export default QuizQuestion;
