import { default as QuizQuestion } from '.';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('QuizQuestion', () => {
    let submitAnswer;
    beforeEach(() => {
        submitAnswer = jest.fn();
        render(<QuizQuestion question={"Is react good?"} wrongAnswers={['no', 'hell no', 'really no']} correctAnswer={'yes'} submitAnswer={submitAnswer}/>);
    });

    test('it renders a heading and 4 buttons for the answers', () => {
        let question = screen.getByRole('heading');
        let answers = screen.getAllByRole('button');
        expect(question).toBeInTheDocument();
        expect(question.textContent).toBe('Is react good?')
        expect(answers.length).toBe(4);
    });

    test('it calls submitAnswer on button click', () => {
        let answer = screen.getAllByRole('button')[0];
        userEvent.click(answer);
        expect(submitAnswer).toHaveBeenCalled();
    })
});