import axios from 'axios';


export const sendScore = async (id, name, score) => {
        try {
            console.log(name)
            let data = await axios.put(`http://localhost:3000/quizzes/${id}/users/${name}`, { highscore: score })

            console.log(data)
        } catch (err) {
            console.warn(err.message)
        }

}


