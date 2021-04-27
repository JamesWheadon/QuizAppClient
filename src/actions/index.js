//actions to update store
import axios from 'axios';

const API_URL = process.node.API_URL

const error = (err) => ({ type: 'SET_ERROR', payload: err.message });
const setUser = (name, id, highscore) => ( { type: 'LOAD_USER', payload: { name, id, highscore, score: 0 } } );

export const setPlayer1 = () => ( { type: 'SET_PLAYER1', payload: { player1: true } } );
export const updatePlayerScore = (score) => ({ type: 'UPDATE_SCORE', payload: score })




export const addUser = (username) => {
    return async (dispatch) => {
        try {
            let { data } = await axios.post(`${API_URL}/users/`, { name: username })
            let {name, id, highscore } = data
            dispatch(setUser(name, id, highscore))
        } catch (err) {
            try {
             let { data } = await axios.get(`${API_URL}/users/${username}`)
             let {name, id, highscore } = data
             dispatch(setUser(name, id, highscore))

            } catch (err) {
            dispatch(error(err));
            }
        }
    }
}


export const fetchQuestions = (data) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${API_URL}/quiz`, data )
            let {quiz_id, id, category, difficulty,length} = data
            let questions = data.questions.map( ({ question, correct_answer, incorrect_answers }) => ({ question, correct_answer, incorrect_answers  }))
            dispatch({
                type: 'LOAD_QUESTIONS',
                payload: {questions, quiz_id, id, category, difficulty, length}
            })
        } catch (err) {
            dispatch(error(err));
        }
    }
}

// export const addPlayers = () => {
//     return async (dispatch) => {
//         try {
//             let { data } = await axios.get(`${API_URL}/`)
//             let {players } = data
//             dispatch({ type: 'SET_PLAYER1', payload: players })
//         } catch (err) {
            
//             dispatch(error(err));
        
//         }
//     }
// }

