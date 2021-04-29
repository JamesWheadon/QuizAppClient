import axios from 'axios';
import * as actions from './index';
jest.mock('axios');

describe('question actions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('Dispatches LOAD_USER after fetching users', () => {
        // Response body sample
        const response = 
            {
                id: 1,
                name: 'bob',
                highscore: '100'
            }

        fetchMock.getOnce('/books',
                { body: { results: response }})

        const expectedActions = [
         { type: booksActions.BOOKS_REQUEST, payload: undefined},
         { type: booksActions.BOOKS_SUCCESS, payload: { results: response}}
        ]
        store.dispatch(booksActions.getBooks())
             .then(() => {
                 expect(store.getActions()).toEqual(expectedActions)
             })
    })
})