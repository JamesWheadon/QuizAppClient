import { prettyDOM, screen } from '@testing-library/react';
import Highscores from '.';

const API_URL = "http://localhost:3000";

import axios from 'axios';
jest.mock('axios');

describe('Highscores', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    })

    test('it renders with a table on successful api call', async () => {
        axios.get.mockResolvedValue({ data: [{ id: 1, name: 'Ryan', highscore: 100 }] });

        render(<Highscores />);

        const table = await screen.findByRole('table');
        expect(table).toBeInTheDocument()

    })

    test('it renders with an error on failed API call', async () => {
        axios.get.mockRejectedValue(new Error(''))
        render(<Highscores />);

        const userError = await screen.findByText("Oops, no highscores yet!")
        expect(userError).toBeInTheDocument()
    })
/*
    test('it renders with an image', async () => {
        axios.get.mockResolvedValue({ data: [{ id: 1, name: 'Ryan', highscore: 100 }] });
        render(<Highscores />);

        expect(await screen.findByAltText("wizard", {exact: false})).toBeInTheDocument();
    })
    */

})