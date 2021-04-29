import axios from 'axios';
import * as action from './index';
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.mock('axios');

describe('Question Actions', () => {

    const initState = {}

    const store = mockStore(initState)

    beforeEach(() => {
        store.clearActions()
    })


    it('Dispatches UPDATE_SCORE action', () => {
        
        const expectedActions = [
            { type: 'UPDATE_SCORE' }
        ]
        store.dispatch(action.updatePlayerScore())
        const actions = store.getActions()
        expect(store.getActions()).toEqual(expectedActions)
             
    })

    it('Dispatches LOAD_ICON action', () => {
        const ref = "test"
        
        const expectedActions = [
            { type: 'LOAD_ICON', payload: ref }
        ]
        store.dispatch(action.setIcon(ref))
        const actions = store.getActions()
        expect(store.getActions()).toEqual(expectedActions)
             
    })


    it('Dispatches SET_ERROR action', () => {
        const err= { message:"Error" }
        
        const expectedActions = [
            { type: 'SET_ERROR', payload: err.message}
        ]
        store.dispatch(action.error(err))
        const actions = store.getActions()
        expect(store.getActions()).toEqual(expectedActions)
             
    })
})

describe('async actions', () => {
    let store;

    beforeEach(() => {
        store = mockStore({});
        store.clearActions()
    })

    it('addUser', () => {
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
        
        axios.post.mockImplementationOnce(() => Promise.resolve({data:r}));
         
        return store.dispatch(action.addUser("bob"))
          .then(() => { 
            expect(store.getActions()).toEqual(expectedActions)
          })
      })

      it('fetchQuestions', () => {
        const r = 
         {
            quiz: 1,
            questions:  [ {question: "h", correct_answer: "j", incorrect_answers :["j"] } ]

        }

        
        const expectedActions = [
            { type: 'LOAD_QUESTIONS', payload: r }
        ]
        
        axios.post.mockImplementationOnce(() => Promise.resolve({data:r}));
         
        return store.dispatch(action.fetchQuestions(1))
          .then(() => { 
            expect(store.getActions()).toEqual(expectedActions)
          })
      })


      it('sendscore', () => {
        const r = {
                id: 1,
                name: 'bob',
                highscore: 100,
                score: 4
            }

        
        const expectedActions = [
            { type: 'LOAD_USER', payload: r }
        ]
        
        axios.get.mockImplementationOnce(() => Promise.resolve({data: r}));
         
        return store.dispatch(action.sendScore(1,"bob", 4))
          .then(() => { 
            console.log(store.getActions())
            expect(store.getActions()).toEqual(expectedActions)
          })
      })


      it('getAllPlayers', () => {
        const r = ["test"]

        
        const expectedActions = [
            { type: 'ADD_PLAYERS', payload: r }
        ]
        
        axios.get.mockImplementationOnce(() => Promise.resolve({data: r}));
         
        return store.dispatch(action.getAllPlayers(1))
          .then(() => { 
            console.log(store.getActions())
            expect(store.getActions()).toEqual(expectedActions)
          })
      })


})