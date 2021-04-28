import React from 'react';
import { Link } from "react-router-dom";
import './styles.css'

const Home = () => {

    return (
        <div className="home-container">
            <div className="welcome-text">
                <h1>Welcome to Quizards!</h1>
                {/* <button className="home-button">Start A Quiz</button> */}


            </div>
            <img className="main-logo" src="../../images/Quizards-logo-small.png" alt="" />
            <Link to="/startquiz">
                <button type="button" className="start-quiz-btn">
                    Start a Quiz!
                </button>
            </Link>

        </div>
    )
}

export default Home;