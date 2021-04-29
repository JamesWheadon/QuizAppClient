import { default as StartQuiz } from '.';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as actions from '../../actions';
import { Router } from "react-router";
import { createMemoryHistory } from "history";

describe('UsernameRoom', () => {
    let joinRoom;
    let sendMessage;
    let quizStart;
    let initState;
    let fetchQuestions;

    beforeEach(() => {
        joinRoom = jest.fn();
        sendMessage = jest.fn();
        quizStart = jest.fn();
        fetchQuestions = jest.spyOn(actions, 'fetchQuestions');
        initState = {
            questions: [ {question: "", correct_answer: "", incorrect_answers :[] } ],
            quiz: {},
            user: {name: "Steve", id: 0, score: 0, highscore: 0, icon:"" },
            players: [],
            player1: false,
            loading: false
        };
    });

    test('it renders a form with no users in state', () => {
        renderWithReduxProvider(<StartQuiz joinRoom={joinRoom} sendMessage={sendMessage} users={[]} messages={[]} quizStart={quizStart}/>, { initState });
        let form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
    });

    test('it renders a room with users in state', () => {
        renderWithReduxProvider(<StartQuiz joinRoom={joinRoom} sendMessage={sendMessage} users={[{name: "Steve", id: "1", icon: "4"}]} messages={[]} quizStart={quizStart}/>, { initState });
        let forms = screen.getAllByRole('form');
        expect(forms.length).toEqual(2);
        expect(forms[0]).toBeInTheDocument();
    });

    test('it calls fetchQuestions when the question form is submitted', () => {
        renderWithReduxProvider(<StartQuiz joinRoom={joinRoom} sendMessage={sendMessage} users={[{name: "Steve", id: "1", icon: "4"}]} messages={[]} quizStart={quizStart}/>, { initState });
        let quizFormSubmit = screen.getAllByRole('button')[1];
        userEvent.click(quizFormSubmit);
        expect(fetchQuestions).toHaveBeenCalled();
    });

    test('it calls quizStart when questions are fetched and stored in state', () => {
        initState = {
            questions: [ {question: "", correct_answer: "", incorrect_answers :[] }, {question: "", correct_answer: "", incorrect_answers :[] } ],
            quiz: {},
            user: {name: "Steve", id: 0, score: 0, highscore: 0, icon:"" },
            players: [],
            player1: false,
            loading: false
        };
        const history = createMemoryHistory();
        renderWithReduxProvider(<Router history={history}><StartQuiz joinRoom={joinRoom} sendMessage={sendMessage} users={[{name: "Steve", id: "1", icon: "4"}]} messages={[]} quizStart={quizStart}/></Router>, { initState });
        expect(quizStart).toHaveBeenCalled();
    });
});