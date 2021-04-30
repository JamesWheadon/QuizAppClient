import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Leaderboard } from "../../components";
import { sendScore } from "../../actions";

import './style.css';

const WinnersPage = ({ users, finished }) => {
    // let quiz = {id: 1, length: 10}
    // let playersData = [
    //     { id: 1, name: "test", score: 2, icon: 1 },
    //     { id: 2, name: "lkdfmsdlf", score: 4, icon: 2 },
    //     { id: 3, name: "ndnfkdf", score: 5, icon: 3 },
    //     { id: 4, name: "lkfmdsd", score: 1, icon: 4 },
    //     { id: 5, name: "dkjfnbhsdkjifn", score: 8, icon: 5 },
    // ]

    const dispatch = useDispatch();

    // comment out these to use mock data
    const quiz = useSelector(state => state.quiz);
    const user = useSelector(state => state.user);
    let playersData = users;

    playersData = playersData.map(p => { return { ...p, highscore: p.score / quiz.length } })

    useEffect(() => {
        dispatch(sendScore(quiz.id, user.name, user.score));
    }, []);

    return (
        <div className="highscores-container">
            {finished
                ?
                <Leaderboard data={playersData} showIcons={true} />
                : <div className="waiting-area">
                    <p>Waiting for others to finish...</p>
                    <img src="https://media.giphy.com/media/LWFMH5wQXtkwE/giphy.gif"></img>
                </div>
            }
            {/* <img className="highscore-img" src="https://media.tenor.com/images/d894ea3155542ede777f6edf39a5f8ea/tenor.gif" alt="winners gif" /> */}
        </div>
    )
}

export default WinnersPage;