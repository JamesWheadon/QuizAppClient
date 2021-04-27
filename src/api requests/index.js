import axios from 'axios';


export const sendScore = ( name, score) => {
        try {
            await axios.post(`${API_URL}/users/${name}`, { highscore: score })
        } catch (err) {
            console.warn(err)
        }
}

