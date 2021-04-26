//actions to update store
import axios from 'axios';

const API_URL = process.node.API_URL

const error = (err) => ({ type: 'SET_ERROR', payload: err.message });


export const updatePlayerScore = (playerId, score) => (dispatch({ type: 'UPDATE_PLAYER', payload: {playerId, score} }))
export const setPlayer = (name, id) => ( { type: 'LOADING', payload: { name,id } } );



export const addPlayer = (username) => {
    return async (dispatch) => {
        try {
            let { data } = await axios.post(`${API_URL}/users/`, { name: username })
            let {name, id } = data
            dispatch(setPlayer(name,id))
        } catch (err) {
            try {
             let { data } = await axios.get(`${API_URL}/users/${username}`)
             dispatch(setPlayer(name,id))

            } catch (err) {
            dispatch(error(err));
            }
        }
    }
}


export const fetchQuestions = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${API_URL}/`)
            let newQuestionsArray = data.results.map( ({ question, correct_answer, incorrect_answers }) => ({ question, correct_answer, incorrect_answers  }))
            dispatch({
                type: 'LOAD_QUESTIONS',
                payload: newQuestionsArray
            })
        } catch (err) {
            dispatch(error(err));
        }
    }
}

