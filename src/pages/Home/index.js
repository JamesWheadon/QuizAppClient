import React from 'react';
import { Link } from "react-router-dom";
import './styles.css'
import wizardCat from '../../images/Quizards-logo-small.png';

const Home = () => {

    return (
        <div className="home-container">
            {/*<img className="main-logo" src="/images/logo.svg" alt="" />*/}
            <svg xmlns="http://www.w3.org/2000/svg" className="main-logo" viewBox="0 0 340 139.75">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <text className="cls-1" transform="translate(6.94 119.34)">Qu zards</text>
                        <path className="cls-2" d="M13.42,54.13c8-20,11.74-36.2,5-40.16C10.85,9.52,3,28,.42,25.32S7.45,0,22.42,0c28,0,34,36.48,43,56.5l-24-5Z"/>
                        <path className="cls-3" d="M1.92,59.35a38,38,0,0,1,8.86-6.79A59,59,0,0,1,21,48a69.41,69.41,0,0,1,33.27-2.63,59.92,59.92,0,0,1,10.88,2.79,54.4,54.4,0,0,1,10.15,4.79A37,37,0,0,1,83.92,60c-7.29-1.48-14-2.58-20.8-3.3-1.69-.21-3.38-.32-5-.49s-3.35-.29-5-.32c-3.34-.24-6.69-.23-10-.29-6.7,0-13.39.28-20.17.94S9.23,58.11,1.92,59.35Z"/>
                        <path className="cls-4" d="M126.39,82.51a5.14,5.14,0,0,1,.2-3.13c.32-1,.71-1.84,1-2.63a3.68,3.68,0,0,0,.11-2.22,12,12,0,0,0-1.32-2.46,4.48,4.48,0,0,1,2.72,1.75,3.75,3.75,0,0,1,.61,1.74,4.47,4.47,0,0,1-.21,1.77A10.16,10.16,0,0,1,128,80.07,20.61,20.61,0,0,0,126.39,82.51Z"/>
                        <path className="cls-4" d="M80.42,130.5a38,38,0,0,1,12-4.77,39.2,39.2,0,0,1,13.15-.47,55,55,0,0,1,12.72,3.29c2,.75,4,1.58,6,2.36,1,.38,1.91.75,2.8,1a6.1,6.1,0,0,0,2.11.4c0,.09.43-.28.38-.29a3.17,3.17,0,0,0-.12-1.58c-.43-1.69-1.26-3.7-2-5.69a62.27,62.27,0,0,1-3.51-12.61,50.56,50.56,0,0,1,2.52-25.66,90.92,90.92,0,0,0-.34,12.64,57.54,57.54,0,0,0,.61,6.17,53.29,53.29,0,0,0,1.19,6,82.12,82.12,0,0,0,4,11.66,49.58,49.58,0,0,1,2.32,6.27,10.89,10.89,0,0,1,.32,2.05,5.87,5.87,0,0,1-.42,2.63,5.4,5.4,0,0,1-1.8,2.26c-.18.14-.36.24-.53.35a5.17,5.17,0,0,1-.71.36,5.32,5.32,0,0,1-1.46.35,7.85,7.85,0,0,1-2.31-.16,13.92,13.92,0,0,1-1.81-.5c-1.12-.38-2.14-.81-3.14-1.24l-5.8-2.55a64.69,64.69,0,0,0-11.64-3.89,43.71,43.71,0,0,0-12.2-.93A50.13,50.13,0,0,0,80.42,130.5Z"/>
                    </g>
                </g>
            </svg>
            
            <div className="welcome-text">
                {/* <h1>Welcome to Quizards!</h1> */}
                <p>
                Compete in a magical quizzing duel against your rival quizards to become the king of all wizards and win the coveted crown prize!
                </p>
                <img className="quiz-cat" src={wizardCat} alt="Wizard cat" />
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