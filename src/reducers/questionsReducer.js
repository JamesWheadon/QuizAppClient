const initState = {
    category: "",
    questions: [ {question: "", correct_answer: "", incorrect_answers :[] } ],
    quiz: {},
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
                quiz: action.payload.quiz,
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
            const newScore = 1+ state.user.score
            return ({
                 ...state, 
                 user: {...state.user, score: newScore}
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