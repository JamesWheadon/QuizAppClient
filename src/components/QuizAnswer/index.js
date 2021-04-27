import React from 'react';

function QuizAnswer({ value, correct, submitAnswer}) {
    return (
        <button onClick={submitAnswer} value={correct}>{value}</button>
    );
};

export default QuizAnswer;
