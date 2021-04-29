import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Leaderboard } from "../../components";

const WinnersPage = ({ users, finished }) => {
    
    // let playersData = [
    //     {id: 1, name: "test", score: 5, icon: 1},
    //     {id: 2, name: "lkdfmsdlf", score: 5, icon: 2},
    //     {id: 2, name: "ndnfkdf", score: 5, icon: 3},
    //     {id: 2, name: "lkfmdsd", score: 5, icon: 4},
    //     {id: 2, name: "dkjfnbhsdkjifn", score: 5, icon: 5},
    // ]
    const quiz = useSelector(state => state.quiz);
    let playersData = users;
    playersData = playersData.map(p => {return {...p, highscore: p.score/quiz.length}})

    return (
        <div className="home-container">
            <div className="highscores-container">
                <br />
                <br />
                {finished
                    ?
                    <Leaderboard data={playersData} showIcons={true}/>
                    : <div><p>Waiting for others to finish...</p></div>
                }
                <img className="highscore-img" src="https://media.tenor.com/images/d894ea3155542ede777f6edf39a5f8ea/tenor.gif" alt="winners gif" />
            </div>
        </div>
    )
}

export default WinnersPage;