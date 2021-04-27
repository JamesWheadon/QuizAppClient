import React from 'react';
import './styles.css'
import { useDispatch,useSelector } from 'react-redux';
import { addUser, fetchQuestions, sendScore, updatePlayerScore} from '../../actions';


const Home = () => {
    const dispatch = useDispatch()
    const handleI = () => {
    
    
    dispatch(updatePlayerScore())
}
  
    const s = useSelector(state => state.user)  
   
    console.log(s)
    

    return (
        <div className="home-container">
            <img className="nav-logo" src="../../images/Quizards-logo.png" alt=""/>
            <div className="welcome-text">
                <h1>Welcome to Quizards!</h1>
                {/* <button className="home-button">Start A Quiz</button> */}
                <button type="button" className="block" onClick={handleI}>
                    <a href="http://localhost:8080/startquiz">Start A Quiz</a>
                </button>
            </div>
        </div>
    )
}

export default Home ;