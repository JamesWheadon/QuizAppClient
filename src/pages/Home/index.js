import React from 'react';
import './styles.css'

const Home = () => {
    return (
        <div className="home-container">
            <img className="nav-logo" src="../../images/Quizards-logo.png" alt=""/>
            <div className="welcome-text">
                <h1>Welcome to Quizards!</h1>
                {/* <button className="home-button">Start A Quiz</button> */}
                <button type="button" class="block">
                    <a href="http://localhost:8080/startquiz">Start A Quiz</a>
                </button>
            </div>
        </div>
    )
}

export default Home ;