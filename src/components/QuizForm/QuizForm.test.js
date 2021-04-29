import { screen, render } from '@testing-library/react';
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
        const difficultySelect = screen.getByRole('difficulty')
        expect(difficultySelect).toBeInTheDocument()
        userEvent.selectOptions(difficultySelect, "Medium")
        expect(difficultySelect.value).toEqual("Medium")
    })

    test('it should be able to select the number of questions', () => {
        const questionNumber = screen.getByRole('questions')
        expect(questionNumber).toBeInTheDocument()

        userEvent.selectOptions(questionNumber, "20")
        expect(questionNumber.value).toEqual("20")
    })

    test('it should have a submit button', () => {
        const submitButton = screen.getByRole('button')
        expect(submitButton).toBeInTheDocument()
        expect(submitButton.textContent).toEqual(' Start Quiz ')
    })
})

