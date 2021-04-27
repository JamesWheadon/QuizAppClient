import { screen } from '@testing-library/react';
import Highscores from '.';

import axios from 'axios';
jest.mock('axios');

describe('Highscores', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    })

    test('it renders with a table with nicknames and highscores', () => {
        axios.get.mockResolvedValue({ data: {name: 'Ryan', highscore: 100}})
        render(<Highscores />);
        expect(screen.getByText('Leaderboard')).toBeInTheDocument();
        expect(screen.getByText('Score')).toBeInTheDocument();
        expect(screen.getByText('Nickname')).toBeInTheDocument();

    })

    test('it renders with a score for each user', () => {
        axios.get.mockResolvedValue({ data: {name: 'Ryan', highscore: 100}});
        render(<Highscores />);
        expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/users");
        expect(screen.findByNumber(100)).toBeInTheDocument();
    })

    test('it renders with an error on failed API call', () => {
        axios.get.mockRejectedValue(new Error(''))
        render(<Highscores />);
        const userError = screen.findByText("Oops, no highscores yet!")
        expect(userError).toBeInTheDocument()
    })

    test('it renders with an image', () => {
        axios.get.mockResolvedValue({ data: {name: 'Ryan', highscore: 100}});
        render(<Highscores />);
        expect(document.querySelector('img')).toBeInTheDocument()
    })

})