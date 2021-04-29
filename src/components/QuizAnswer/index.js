import React from 'react';

function QuizAnswer({ value, correct, submitAnswer}) {
    return (
        <button onClick={submitAnswer} value={correct}  dangerouslySetInnerHTML= {{__html: value}}></button>
    );
};

export default QuizAnswer;
