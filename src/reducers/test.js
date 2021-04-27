import questionsReducer from './questionsReducer'

describe('questions reducer', () => {
    test('it intialises with no user details ', () => {
        const initReturn = questionsReducer(undefined, { type: '@@INIT' })
        expect(initReturn.user).toEqual({name: "", id: 0, score: 0, highscore: 0 })
    })

    test('it returns with updated object when users are loaded', () => {
        const fakeLoad = questionsReducer(
                            { user: {name: "", id: 0, score: 0, highscore: 0 } },
                            { type: 'LOAD_USER', payload:{ name: "bob", id: 1, highscore: 3, score:0 }}
                        )
        expect(fakeLoad).toMatchObject({user: { name: "bob", id: 1, highscore: 3, score:0 },
                                        error: false })
    })


    // test('it returns with updated array when a dog is liked', () => {
    //     const fakeLike = doggoReducer(
    //                         { doggos: [
    //                             { id: 1, liked: false },
    //                             { id: 2, liked: false }
    //                         ] },
    //                         { type: 'TOGGLE_LIKE_DOGGO', payload: 1}
    //                     )
    //     expect(fakeLike).toMatchObject({ doggos: [
    //                             { id: 1, liked: true },
    //                             { id: 2, liked: false }
    //                         ]})
    // })

    // test('it returns with updated array when a dog is deleted', () => {
    //     const fakeDelete = doggoReducer(
    //                         { doggos: [
    //                             { id: 1, liked: false },
    //                             { id: 2, liked: false }
    //                         ] },
    //                         { type: 'DELETE_DOGGO', payload: 1}
    //                     )
    //     expect(fakeDelete).toMatchObject({
    //                         doggos: [
    //                             { id: 2, liked: false }
    //                         ]
    //                     })
    // })
});