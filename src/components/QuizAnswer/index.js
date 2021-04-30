import React from 'react';
import './style.css';

function QuizAnswer({ value, correct, submitAnswer}) {
    return (
        <button className="answer-btn" onClick={submitAnswer} value={correct}  dangerouslySetInnerHTML= {{__html: value}}></button>
    );
};

export default QuizAnswer;
