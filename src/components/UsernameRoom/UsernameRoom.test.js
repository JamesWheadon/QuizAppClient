import { default as UsernameRoom } from '.';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('UsernameRoom', () => {
    let joinRoom;

    beforeEach(() => {
        joinRoom = jest.fn();
        render(<UsernameRoom joinRoom={joinRoom}/>);
    });

    test('it renders a form', () => {
        let form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
    });

    test('it calls on joinRoom prop on form submission', () => {
        let submit = screen.getByRole('button');
        userEvent.click(submit);
        expect(joinRoom).toHaveBeenCalled();
    })
});