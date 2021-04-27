import { default as RoomChat } from '.';
import { render, screen } from '@testing-library/react';

describe('RoomChat', () => {
    beforeEach(() => {
        render(<RoomChat messages={[{username: "Steve", message: "Can"}]}/>);
    });

    test('it calls ChatMessage with username Steve and message Can', () => {
        let message = screen.getByRole('message');
        expect(message).toBeInTheDocument();
        expect(message.textContent).toBe('Steve: Can');
    });
});