import React, {useEffect, useState, useSelector} from 'react';
import axios from "axios";

import { Leaderboard } from "../../components";

const WinnersPage = () => {

    const [userData, setUserData] = useState("");

    useEffect(() => {
        async function getUserData() {
            try {
                // const lobbyData = useSelector(state => state.quiz.quiz_id)  // quiz_id
                const playersData = useSelector(state => state.players)  // quiz_id, id, scores
                setUserData(playersData)
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
                ?
                <Leaderboard data={userData} /> 
                : <div><p>Oops, no winner yet!</p></div>
                }
                <img className="highscore-img" src="https://media.tenor.com/images/d894ea3155542ede777f6edf39a5f8ea/tenor.gif" alt="winners" />
                <img src="" alt=""/>
            </div>
        </div>
    )
}

export default WinnersPage;