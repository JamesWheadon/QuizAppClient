//actions to update store
import axios from 'axios';

// const API_URL = process.node.REACT_APP_API_URL

const error = (err) => ({ type: 'SET_ERROR', payload: err.message });
const setUser = (name, id, highscore) => ( { type: 'LOAD_USER', payload: { name, id, highscore, score: 0 } } );

export const setPlayer1 = () => ( { type: 'SET_PLAYER1', payload: { player1: true } } );
export const updatePlayerScore = (score) => ({ type: 'UPDATE_SCORE', payload: score })




export const addUser = (username) => {
    return async (dispatch) => {
        try {
            let { data } = await axios.post(`http://localhost:3000/users/`, { name: username })
            let {name, id, highscore } = data
            dispatch(setUser(name, id, highscore))
        } catch (err) {
            try {
             let { data } = await axios.get(`http://localhost:3000/users/${username}`)
             console.log("asd")
             let {name, id, highscore } = data
             dispatch(setUser(name, id, highscore))

            } catch (err) {
            dispatch(error(err));
            }
        }
    }
}


export const fetchQuestions = (input) => {
    let quizInfo =input
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`http://localhost:3000/quizzes/`, quizInfo )
            let {quiz} = data
            let questions = data.questions.map( ({ question, correct_answer, incorrect_answers }) => ({ question, correct_answer, incorrect_answers  }))
            dispatch({
                type: 'LOAD_QUESTIONS',
                payload: {questions, quiz}
            })
        } catch (err) {
            dispatch(error(err));
        }
    }
}


/// sends score and resets user state to include new highscore
export const sendScore = async (id, name, score) => {
    let [userId, username] =[id, name] 
    try {
        await axios.put(`http://localhost:3000/quizzes/${userId}/users/${name}`, { highscore: score })
        let { data } = await axios.post(`http://localhost:3000/users/`, { name: username })
        let {name, id, highscore } = data
        dispatch(setUser(name, id, highscore))
        
    } catch (err) {
        dispatch(error(err))
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

