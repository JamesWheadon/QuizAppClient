import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import QuizForm from '.';

describe('QuizForm', () => {
    
    let handleFormSubmit = jest.fn()
    beforeEach(() => {
        render(<QuizForm handleFormSubmit={handleFormSubmit}/>)
    });


    test('it should render a quiz form', () => {
        const form = screen.getByRole('form')
        expect(form).toBeInTheDocument()
    })

    test('it should test three difficulties', () => {
        const difficultyEasy = screen.getByRole('difficulty')
        expect(difficultyEasy).toBeInTheDocument()
        // userEvent.click()
        const difficultyMedium = screen.getByText('Medium');
        userEvent.click(difficultyMedium)
        // expect(handleChange).toHaveBeenCalled()
        expect(difficultyMedium).toEqual("Medium")
    })

    test('it should be able to select the number of questions', () => {
        const questionNumber = screen.getByRole('questions')
        expect(questionNumber).toBeInTheDocument()

        const questionChange = screen.getByText('20')
        userEvent.click(questionChange)
        expect(questionNumber).toEqual("20")
    })

    test('it should have a submit button', () => {
        const submitButton = screen.getByRole('submit')
        expect(submitButton).toBeInTheDocument()
        expect(submitButton.textContent).toEqual('Start Quiz')
    })
})

