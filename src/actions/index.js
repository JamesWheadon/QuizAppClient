import axios from 'axios';

const error = (err) => ({ type: 'SET_ERROR', payload: err.message });
const setUser = (name, id, highscore, score = 0) => ({ type: 'LOAD_USER', payload: { name, id, highscore, score } });
const setPlayerScores = (arr) => ({ type: 'ADD_PLAYERS', payload: arr });

export const setPlayer1 = () => ( { type: 'SET_PLAYER1', payload: { player1: true } } );
export const setIcon = (ref) => ( { type: 'LOAD_ICON', payload: ref } );
export const updatePlayerScore = () => ({ type: 'UPDATE_SCORE' })


//adds user or if user already exists sets state.user with response

export const addUser = (username) => {
    return async (dispatch) => {
        try {
            let { data } = await axios.post(`http://localhost:3000/users/`, { name: username })
            let { name, id, highscore } = data
            dispatch(setUser(name, id, highscore))
        } catch (err) {
            try {
                let { data } = await axios.get(`http://localhost:3000/users/${username}`)
                let { name, id, highscore } = data
                dispatch(setUser(name, id, highscore))
            } catch (err) {
                dispatch(error(err));
            }
        }
    }
}

// input needs to be object with category, diffuclity length, users []. 
export const fetchQuestions = (input) => {
    let quizInfo = input
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`http://localhost:3000/quizzes/`, quizInfo)
            let { quiz } = data
            let questions = data.questions.map(({ question, correct_answer, incorrect_answers }) => ({ question, correct_answer, incorrect_answers }))
            dispatch({
                type: 'LOAD_QUESTIONS',
                payload: { questions, quiz }
            })
        } catch (err) {
            dispatch(error(err));
        }
    }
}


/// sends score and resets user state to include new highscore
export const sendScore = (quizId, username, score) => {
    return async (dispatch) => {
        try {
            await axios.put(`http://localhost:3000/quizzes/${quizId}/users/${username}`, { score })
            let { data } = await axios.get(`http://localhost:3000/users/${username}`)
            let { name, id, highscore } = data
            dispatch(setUser(name, id, highscore, score))
        } catch (err) {
            dispatch(error(err))
        }
    }
}


export const getAllPlayers = (quizid) => {
    return async (dispatch) => {
        try {
            let { data } = await axios.get(`http://localhost:3000/quizzes/${quizid}/users/`)
            console.log(data);
            let players = data
            
            dispatch(setPlayerScores(players))

        } catch (err) {
            dispatch(error(err))
        }
    }
}

