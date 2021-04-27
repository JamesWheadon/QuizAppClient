import React, { useState } from 'react';
import "./styles.css";
import axios from "axios";

const Highscores = () => {
    const [userData, setUserData] = useState("");

    const handleUsers = (event) => {
        event.preventDefault();
    }

    async function getUserData() {
        const { data } = await axios.get(
            `http://localhost:3000/users`
        )
        setUserData(data)
    }

    return (
        <div className="home-container" onload={getUserData}>
            <div className="highscores-container">
                <div className="highscores-text">
                    Leaderboard
                </div>
                <br/>
                <br/>
                <div className="highscores-point">
                    <table className="highscores-table">
                        <tbody>
                            <tr className="table-input">
                                <th>Nickname</th>
                                <th>Score</th>
                                <th>Icon</th>
                            </tr>
                            {userData ? userData.map((g) => (
                                <tr>
                                    <td>{g.name}</td>
                                    <td>{g.highscore}</td>
                                    <td>whale</td>
                                </tr>)) : "" }
                        </tbody>
                    </table>
                </div>
                <img className="highscore-img" src="../../images/wizard-two.png" alt=""/>
            </div>
        </div>
    )
}

export default Highscores ; 