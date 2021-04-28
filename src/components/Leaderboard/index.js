import React from 'react';
import "./styles.css";

const Leaderboard = ({ data }) => {

    let leaderboardData = Array.isArray(data) && data
        .sort((a, b) => { return b.highscore - a.highscore })
        .map((g, i) => {
            return (
                <tr key={g.id}>
                    <td key={`icon-${g.id}`} className={`${i==1 ? "top-layer" : ""}`}>whale</td>
                    <td key= {`name-${g.id}`}>{g.name}</td>
                    <td key={`hs-${g.id}`}>{g.highscore * 100}%</td>
                </tr>
            )
        })

    return (
        <>
            <h2 className="highscores-text">Leaderboard</h2>
            <table role="table" className="highscores-table">
                <thead key="header">
                    <tr key="header columns">
                        <th key="nickname">Nickname</th>
                        <th key="score">Score</th>
                        <th key="icon">Icon</th>
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