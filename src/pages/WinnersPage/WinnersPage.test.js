import { render, screen, within } from '@testing-library/react';
import WinnersPage from '.';

describe('Winners page', () => {
    let table;
    let players;

    let initState = {
        questions: [{ question: "", correct_answer: "", incorrect_answers: [] }],
        quiz: { id: 1, length:10 },
        user: { name: "Steve", id: 0, score: 0, highscore: 0, icon: "" },
        players: [{ id: 1, name: 'Ryan', score: 1, icon: "1" }],
        player1: false,
        loading: false
    };

    beforeEach(() => {
        jest.resetAllMocks();
    })

    it('should map all the lobby users into a table with their name, score and icon', async () => {
        renderWithReduxProvider(<WinnersPage users={initState.players} finished={true} />, { initState });

        table = await screen.findByRole('table');
        players = await within(table).findAllByRole('row');

        expect(table).toBeInTheDocument()
        expect(players).toHaveLength(2); 

        const playerName = await within(players[1]).getByText('Ryan');
        const playerScore = await within(players[1]).getByText('10%');
     
        expect(playerName).toBeInTheDocument();
        expect(playerScore).toBeInTheDocument();
    });

    test('should render a message if the game is not finished', () => {
        renderWithReduxProvider(<WinnersPage users={initState.players} finished={false} />, { initState });

        expect(screen.getByText("waiting", { exact: false })).toBeInTheDocument();
    });

    test('it renders with an image', async () => {
        renderWithReduxProvider(<WinnersPage users={initState.players} finished={true} />, { initState });
        expect(await screen.findByAltText("winners gif", { exact: false })).toBeInTheDocument();
    })
})