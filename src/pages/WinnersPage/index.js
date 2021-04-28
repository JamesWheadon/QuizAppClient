import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPlayers } from '../../actions';
import { Leaderboard } from "../../components";

const WinnersPage = ({ finished }) => {

    const dispatch = useDispatch();
    // const [userData, setUserData] = useState("");
    let playersData = useSelector(state => state.players);
    const quiz = useSelector(state => state.quiz);
    
    playersData = playersData.map(p => {return {...p, highscore: p.score/quiz.length}})
    
    useEffect(() => {
        dispatch(getAllPlayers(quiz.id));
    }, []);

    return (
        <div className="home-container">
            <div className="highscores-container">
                <br />
                <br />
                {finished
                    ?
                    <Leaderboard data={playersData} />
                    : <div><p>Waiting for others...</p></div>
                }
                <img className="highscore-img" src="https://media.tenor.com/images/d894ea3155542ede777f6edf39a5f8ea/tenor.gif" alt="winners" />
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default WinnersPage;