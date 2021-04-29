import React, { useEffect, useState } from 'react';
import "./styles.css";
import axios from "axios";

import { Leaderboard } from "../../components";

const Highscores = () => {

    const [userData, setUserData] = useState("");

    useEffect(() => {
        async function getUserData() {
            try {
                const { data } = await axios.get(
                    `http://localhost:3000/users`
                )
                setUserData(data)
            } catch {
                setUserData();
            }
        }
        getUserData()
    }, []);

    const handleUsers = (event) => {
        event.preventDefault();
    }
    return (
        <div className="highscores-container">
            {userData
                ? <Leaderboard data={userData} />
                : <div><p>Oops, no highscores yet!</p></div>
            }
            {/* <img className="highscore-img" src="../../images/wizard-two.png" alt="wizard" /> */}
        </div>

    )
}

export default Highscores;