import React from 'react';
import "./styles.css"

const Highscores = () => {
    return (
        <div className="home-container">
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
                            <tr>
                                <td>Bob</td>
                                <td>50</td>
                                <td>whale</td>
                            </tr>
                            <tr>
                                <td>Sob</td>
                                <td>20</td>
                                <td>pig</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <img className="highscore-img" src="../../images/wizard-two.png" alt=""/>
            </div>
        </div>
    )
}

export default Highscores ; 