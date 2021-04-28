import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import questionsReducer from '../reducers/questionsReducer';

const TestProviders = ({ initState }) => {
    initState ||= {
        questions: [ {question: "", correct_answer: "", incorrect_answers :[] } ],
        quiz: {},
        user: {name: "", id: 0, score: 0, highscore: 0, icon:"" },
        players: [],
        player1: false,
        loading: false
    };
    let testReducer = () => questionsReducer(initState, { type: '@@INIT' })
    const testStore = createStore(testReducer, applyMiddleware(thunk))

    return ({ children }) => (
        <Provider store={testStore}>
            { children }
        </Provider>
    )
}

const renderWithReduxProvider = (ui, options={}) => {
    let TestWrapper = TestProviders(options)
    render(ui, { wrapper: TestWrapper, ...options })
}

global.renderWithReduxProvider = renderWithReduxProvider
global.React = React;
global.render = render;
global.userEvent = userEvent;