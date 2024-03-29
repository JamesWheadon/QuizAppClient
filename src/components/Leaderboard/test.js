import { screen } from '@testing-library/react';
import Leaderboard from '.';

import axios from 'axios';
jest.mock('axios');

describe('Leadboard', () => {
    let data = [{ id: 1, name: 'Ryan', highscore: 1 }, { id: 2, name: 'Test', highscore: 2 }];

    beforeEach(() => {
        render(<Leaderboard data={data} />);
        jest.resetAllMocks();
    })

    test('it renders with a table with nicknames and highscores', () => {
        expect(screen.getByRole('heading', { name: 'Leaderboard' })).toBeInTheDocument();
        expect(screen.getByText('Score')).toBeInTheDocument();
        expect(screen.getByText('Player')).toBeInTheDocument();

    })

    test('it renders with a percentage score for each user', () => {
        expect(screen.getByText('Ryan')).toBeInTheDocument();
        expect(screen.getByText('100%')).toBeInTheDocument();
    })
})