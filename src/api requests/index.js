import axios from 'axios';
import {apiUrl} from '../../config/config.js';


export const sendScore = async (id, name, score) => {
        try {
            console.log(name)
            let data = await axios.put(`${apiUrl}/quizzes/${id}/users/${name}`, { highscore: score })

            console.log(data)
        } catch (err) {
            console.warn(err.message)
        }

}


