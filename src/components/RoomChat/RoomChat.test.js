import { default as RoomChat } from '.';
import { screen, render } from '@testing-library/react';

describe('RoomChat', () => {
    <ChatMessage /> = jest.fn()
    beforeEach(() => {
        render(<RoomChat messages={[{username: "Steve", message: "Can"}]}/>);
    });

    test('it calls ChatMessage with username Steve and message Can', () => {
        expect(<ChatMessage />).toHaveBeenCalled();
        expect(<ChatMessage />).toHaveBeenCalledWith(username="Steve", message="Can");
    });
});