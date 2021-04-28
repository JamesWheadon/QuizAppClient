import { render, screen } from '@testing-library/react';
import WinnersPage from '.';

import axios from 'axios';
jest.mock('axios');

describe('Winners page', () => {
    let data = [{ id: 1, name: 'Ryan', highscore: 1 }];

    beforeEach(() => {
        render(<Leaderboard data={data} />);
        jest.resetAllMocks();
    })

    test('it renders with a table on successful api call', async () => {
        axios.get.mockResolvedValue({ data: [{ id: 1, name: 'Ryan', highscore: 100 }] });

        render(<WinnersPage />)

        const table = await screen.findByRole('table');
        expect(table).toBeInTheDocument()
    })

    test('it renders with an error on failed API call', async () => {
        axios.get.mockRejectedValue(new Error(''))
        render(<WinnersPage />);

        const userError = await screen.findByText("Oops, no winner yet!")
        expect(userError).toBeInTheDocument()
    })

    test('it renders with an image', async () => {
        axios.get.mockResolvedValue({ data: [{ id: 1, name: 'Ryan', highscore: 100 }] });
        render(<Highscores />);

        expect(await screen.findByAltText("winners", {exact: false})).toBeInTheDocument();
    })
})