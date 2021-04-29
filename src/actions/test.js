import axios from 'axios';
import * as action from './index';
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.mock('axios');

describe('question actions', () => {

    const initState = {
    }

    const store = mockStore(initState)

    beforeEach(() => {
        store.clearActions()
    })


    it('Dispatches LOAD_USER action', () => {
        // Response body sample
        const r = 
            {
                id: 1,
                name: 'bob',
                highscore: 100,
                score: 0
            }

        const expectedActions = [
            { type: 'LOAD_USER', payload: r }
        ]
        store.dispatch(action.setUser("bob", 1, 100))
        const actions = store.getActions()
        console.log(actions)
        expect(store.getActions()).toEqual(expectedActions)
             
    })

    it('Dispatches UPDATE_SCORE action', () => {
        
        const expectedActions = [
            { type: 'UPDATE_SCORE' }
        ]
        store.dispatch(action.updatePlayerScore())
        const actions = store.getActions()
        console.log(actions)
        expect(store.getActions()).toEqual(expectedActions)
             
    })
})