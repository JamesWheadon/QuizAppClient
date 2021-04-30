import { default as RoomUser } from '.';
import { screen, render } from '@testing-library/react';

describe('RoomUser', () => {

    beforeEach(() => {
        render(<RoomUser user={{name: "Steve", id: "1", icon: "4"}}/>);
    });

    test('it renders an h4 tag with text content of Steve', () => {
        let username = screen.getByRole('heading');
        expect(username).toBeInTheDocument();
        expect(username.textContent).toBe('Steve');
    });
});