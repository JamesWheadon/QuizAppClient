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
        case 'UPDATE_PLAYER':
            const playerToUpdate = state.players.find(p => p.id === action.payload)
            const playersList = state.players.filter(p => p !== playerToUpdate)
            const updatedPlayers = [ 
                ...playersList,
                { ...playerToUpdate, score: score +1 }
            ]
            return ({ ...state, players: updatedPlayers })
        case 'SET_ERROR':
            return { ...state, error: action.payload }
        default:
            return state;
    }
}

export default questionsReducer;