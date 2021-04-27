const initState = {
    category: "",
    questions: [ {question: "", correct_answer: "", incorrect_answers :[] } ],
    quiz_id: "",
    user: {name: "", id: 0, score: 0, highscore: 0 },
    players: [],
    player1: false,
    loading: false
}

const questionsReducer = (state=initState, action) => {
    switch(action.type) {
        case 'LOAD_QUESTIONS':
            return ({
                ...state,
                questions: action.payload.questions,
                quiz_id: action.payload.quiz_id,
                error: false
             })
        case 'LOAD_USER':
            return ({
                ...state,
                user: action.payload,
                error: false
             })
        case 'ADD_PLAYERS':
            return ({
                ...state,
                players: action.payload,
                error: false
             })
        case 'UPDATE_SCORE':
            return ({
                 ...state, 
                 user: {...user, score: action.payload}
            })
        case 'SET_PLAYER1':
            return { ...state, player1: action.payload }
        case 'SET_ERROR':
            return { ...state, error: action.payload }
        default:
            return state;
    }
}

export default questionsReducer;