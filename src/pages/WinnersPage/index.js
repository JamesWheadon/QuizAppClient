import React, {UseEffect, UseState} from 'react';
import axios from "axios";

import { Leaderboard } from "../../components";

const WinnersPage = (quizIds) => {

    const [userData, setUserData] = useState("");

    useEffect(() => {
        async function getUserData() {
            try {
                const { data } = await axios.get(
                    `http://localhost:3000/users`
                )
                filteredData = data.filter(quizIds)
                setUserData(filteredData)
            } catch {
                setUserData();
            }
        }
        getUserData()
    }, []);

    return (
        <div className="home-container">
            <div className="highscores-container">
                <br />
                <br />
                {userData 
                ? <Leaderboard data={userData} /> 
                : <div><p>Oops, no winner yet!</p></div>
                }
                <img className="highscore-img" src="https://media.tenor.com/images/d894ea3155542ede777f6edf39a5f8ea/tenor.gif" alt="wizard" />
            </div>
        </div>
    )
}

export default WinnersPage;