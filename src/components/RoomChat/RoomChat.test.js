import { default as RoomChat } from '.';
import { render, screen } from '@testing-library/react';

describe('RoomChat', () => {
    let sendMessage;
    beforeEach(() => {
        sendMessage = jest.fn();
        render(<RoomChat sendMessage={sendMessage} messages={[{username: "Steve", message: "Can"}]}/>);
    });

    test('it calls ChatMessage with username Steve and message Can', () => {
        let message = screen.getByRole('message');
        expect(message).toBeInTheDocument();
        expect(message.textContent).toBe('Steve: Can');
    });

    test('it renders a form to allow users to send a message', () => {
        let form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
    });

    test('it updates the message state when text is input', () => {
        let messageInput = screen.getByLabelText('Chat:');
        userEvent.type(messageInput, 'hello');
        expect(messageInput.value).toBe('hello');
    });

    test('it calls sendMessage on submit', () => {
        let submit = screen.getByRole('button');
        userEvent.click(submit);
        expect(sendMessage).toHaveBeenCalled();
    });
});