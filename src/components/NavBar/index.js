import React from 'react';
import { NavLink } from 'react-router-dom';
import BackButton from '../BackButton';
import './style.css'

const NavBar = () => {
    return (
        // <header className="nav-head">
            <nav className="nav-links">
                {/* <img className="nav-logo" src="../../images/Quizards-logo.png" alt=""/> */}
                <NavLink className="home-link" exact to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/startquiz">Start A Quiz</NavLink>
                {/* <NavLink activeClassName="active" to="/about">About</NavLink>  about and how to play route */}
                <NavLink activeClassName="active" to="/highscores">Highscores</NavLink>
                <NavLink activeClassName="active" to="/login">Login</NavLink>
                <BackButton />
            </nav>
        // </header>
    )
}

export default NavBar;