import React from 'react';
import { NavLink } from 'react-router-dom';
import BackButton from '../BackButton';
import './style.css'

const NavBar = () => {
    return (
            <nav className="nav-links">
                {/* <img className="nav-logo" src="../../images/Quizards-logo.png" alt=""/> */}
                <NavLink className="home-link" exact to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/startquiz">Start Quiz</NavLink>
                <NavLink activeClassName="active" to="/highscores">Highscores</NavLink>
                {/* <BackButton /> */}
            </nav>
    )
}

export default NavBar;