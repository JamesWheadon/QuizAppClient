import { default as RoomUser } from '.';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('RoomUser', () => {

    beforeEach(() => {
        render(<RoomUser username={"Steve"}/>);
    });

    test('it renders an h4 tag with text content of Steve', () => {
        let username = screen.getByRole('heading');
        expect(username).toBeInTheDocument();
        expect(username.textContent).toBe('Steve');
    });
});