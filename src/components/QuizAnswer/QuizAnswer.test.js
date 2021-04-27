import { default as QuizAnswer } from '.';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('QuizAnswer', () => {
    let submitAnswer;
    beforeEach(() => {
        submitAnswer = jest.fn();
        render(<QuizAnswer value={"True"} correct={true} submitAnswer={submitAnswer}/>);
    });

    test('it renders a button with the answer value as text content', () => {
        let answer = screen.getByRole('button');
        expect(answer).toBeInTheDocument();
        expect(answer.textContent).toBe('True');
    });

    test('it calls submitAnswer on click', () => {
        let answer = screen.getByRole('button');
        userEvent.click(answer);
        expect(submitAnswer).toHaveBeenCalledWith(true);
    })
});