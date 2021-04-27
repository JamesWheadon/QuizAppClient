import React from 'react';

function QuizAnswer({ value, correct, submitAnswer}) {

    return (
        <button onClick={submitAnswer(correct)}>{value}</button>
    );
};

export default QuizAnswer;
