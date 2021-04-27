import { default as ChatMessage } from '.';
import { screen, render } from '@testing-library/react';

describe('ChatMessage', () => {

    beforeEach(() => {
        render(<ChatMessage username={"Steve"} message={"Can"}/>);
    });

    test('it renders an p tag with text content of Steve: Can', () => {
        let message = screen.getByRole('message');
        expect(message).toBeInTheDocument();
        expect(message.textContent).toBe('Steve: Can');
    });
});