import React from 'react';
import { Link } from "react-router-dom";
import './styles.css'

const Home = () => {

    return (
        <div className="home-container">

                <img className="main-logo" src="/images/logo.svg" alt="" />    

            {/* <img className="main-logo" src="../../images/Quizards-logo-small.png" alt="" /> */}
            <div className="welcome-text">
                {/* <h1>Welcome to Quizards!</h1> */}
                
                <p>
                Compete in a magical quizzing duel against your rival quizards to become the king of all wizards and win the coveted crown prize!
                </p>
            </div>
            
            <Link to="/startquiz">
                <button type="button" className="start-quiz-btn">
                    Start a Quiz!
                </button>
            </Link>

        </div>
    )
}

export default Home;