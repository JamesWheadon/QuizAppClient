import React from 'react';
import { icons } from "../../images/userIcons";
import "./styles.css";

const Leaderboard = ({ data, showIcons }) => {
    let leaderboardData = Array.isArray(data) && data
        .sort((a, b) => { return b.highscore - a.highscore })
        .map((u, i) => {
            return (
                <tr key={u.id}>
                    <td className="player-info" key={`name-${u.id}`}
                    >
                        {showIcons &&
                            <div className="player-icon-container">
                                { i === 0 && <img className="winner-crown" src={'images/crowns.png'} />}
                                {<img className="user-icon" src={icons.find(icon => u.icon == icon.id).url || ""} />}
                            </div>}
                        <p className="leaderboard-name">{u.name}</p>
                    </td>
                    <td className="player-score" key={`hs-${u.id}`}>{u.highscore * 100}%</td>
                </tr>
            )
        })

    return (
        <>
            <h2 className="highscores-text">Leaderboard</h2>
            <table role="table" className="highscores-table">
                <thead key="header">
                    <tr key="header columns">
                        <th key="player" className="player-header">Player</th>
                        <th key="score" className="player-score">Score</th>
                    </tr>
                </thead>
                <tbody key="leaderboard">
                    {leaderboardData}
                </tbody>
            </table>
        </>
    )
}

export default Leaderboard;