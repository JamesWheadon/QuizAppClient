import axios from 'axios';


export const sendScore = ( score) => {
        try {
            await axios.post(`${API_URL}/users/`, { highscore: score })
        } catch (err) {
            console.warn(err)
        }
}

