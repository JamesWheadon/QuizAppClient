import { default as UsernameRoom } from '.';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('UsernameRoom', () => {
    let joinRoom;

    beforeEach(() => {
        joinRoom = jest.fn();
        let initState = {
            questions: [ {question: "", correct_answer: "", incorrect_answers :[] } ],
            quiz: {},
            user: {name: "Steve", id: 0, score: 0, highscore: 0, icon:"" },
            players: [],
            player1: false,
            loading: false
        };
        renderWithReduxProvider(<UsernameRoom joinRoom={joinRoom} />, { initState });
    });

    test('it renders a form', () => {
        let form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
    });

    test('it updates the username state when text is input', () => {
        let usernameInput = screen.getByLabelText('Username');
        userEvent.type(usernameInput, 'Steve');
        expect(usernameInput.value).toBe('Steve');
    });

    test('it updates the room state when text is input', () => {
        let roomInput = screen.getByLabelText('Room code');
        userEvent.type(roomInput, 'Monkey');
        expect(roomInput.value).toBe('Monkey');
    });

    test('it calls on joinRoom prop on form submission', () => {
        let submit = screen.getByRole('button');
        userEvent.click(submit);
        expect(joinRoom).toHaveBeenCalled();
    });
});