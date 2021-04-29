import questionsReducer from './questionsReducer'

describe('questions reducer', () => {
    test('it intialises with no user details ', () => {
        const initReturn = questionsReducer(undefined, { type: '@@INIT' })
        expect(initReturn.user).toEqual({name: "", id: 0, score: 0, highscore: 0, icon:"" })
    })

    test('it returns with updated object when users are loaded', () => {
        const fakeLoad = questionsReducer(
                            { user: {name: "", id: 0, score: 0, highscore: 0 } },
                            { type: 'LOAD_USER', payload:{ name: "bob", id: 1, highscore: 3, score:0 }}
                        )
        expect(fakeLoad).toMatchObject({user: { name: "bob", id: 1, highscore: 3, score:0 },
                                        error: false })
    })

    test('it returns with updates score when a play score is updated', () => {
        const fakeUpdate = questionsReducer(undefined, { type: 'UPDATE_SCORE' } )
        expect(fakeUpdate.user).toMatchObject({name: "", id: 0, score: 1, highscore: 0 })
    })

    test('it returns with question array', () => {
        let quiz= 1
        let questions = [ {question: "dummy", correct_answer: "aha", incorrect_answers :["blaa"] } ]
        const fakeLoadQuestions = questionsReducer(
            {questions: [ {question: "", correct_answer: "", incorrect_answers :[]}] } ,
            { type: 'LOAD_QUESTIONS', payload: {questions, quiz}  })
        expect(fakeLoadQuestions.questions).toMatchObject([{question: "dummy", correct_answer: "aha", incorrect_answers :["blaa"]}])
    })


});