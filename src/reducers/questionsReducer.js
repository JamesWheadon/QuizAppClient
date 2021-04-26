const initState = {
    category: "",
    questions: [ {question: "", correct_answer: "", incorrect_answers :[] } ],
    players: [],
    loading: false
}

const questionsReducer = (state=initState, action) => {
    switch(action.type) {
        case 'LOAD_QUESTIONS':
            return ({
                ...state,
                questions: action.payload,
                error: false
             })
        case 'ADD_PLAYERS':
            return ({
                ...state,
                players: action.payload,
                error: false
             })
        
        case 'SET_ERROR':
            return { ...state, error: action.payload }
        default:
            return state;
    }
}

export default questionsReducer;