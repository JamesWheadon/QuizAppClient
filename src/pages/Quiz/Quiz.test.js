import { default as Quiz } from '.';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as actions from '../../actions';
import { Router } from "react-router";
import { createMemoryHistory } from "history";

describe('UsernameRoom', () => {
    let finishQuiz;
    let updatePlayerScore;
    let initState;

    beforeEach(() => {
        finishQuiz = jest.fn();
        updatePlayerScore = jest.spyOn(actions, 'updatePlayerScore');
        initState = {
            questions: [ {question: "test", correct_answer: "yesTest", incorrect_answers :[] }, {question: "test2", correct_answer: "yesTest2", incorrect_answers :["noTest2"] } ],
            quiz: {},
            user: {name: "Steve", id: 0, score: 0, highscore: 0, icon:"" },
            players: [],
            player1: false,
            loading: false
        };
        const history = createMemoryHistory();
        renderWithReduxProvider(<Router history={history}><Quiz finishQuiz={finishQuiz}/></Router>, { initState });
    });

    test('it renders a form with no users in state', () => {
        let question = screen.getByRole('heading');
        expect(question).toBeInTheDocument();
        let answers = screen.getAllByRole('button');
        expect(answers.length).toEqual(1);
    });

    test('it calls updatePlayerScore when a correct answer is clicked and the next question renders', () => {
        let answer = screen.getByRole('button');
        expect(answer).toBeInTheDocument();
        userEvent.click(answer);
        expect(updatePlayerScore).toHaveBeenCalled();
        let question = screen.getByRole('heading');
        expect(question).toBeInTheDocument();
        let answers = screen.getAllByRole('button');
        expect(answers.length).toEqual(2);
    });

    test('it calls finishQuiz when the quiz is done', () => {
        let answer = screen.getByRole('button');
        userEvent.click(answer);
        let secondAnswer = screen.getAllByRole('button')[0];
        userEvent.click(secondAnswer);
        expect(finishQuiz).toHaveBeenCalled();
    });
});