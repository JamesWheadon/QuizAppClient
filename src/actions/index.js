import axios from 'axios';

const error = (err) => ({ type: 'SET_ERROR', payload: err.message });

export const addPlayers = players => ( dispatch({ type: 'LOADING', payload: players }));


export const fetchQuestions = (amount, category, difficulty) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
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