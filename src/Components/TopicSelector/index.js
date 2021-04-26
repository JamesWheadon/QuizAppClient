import React, { useState } from "react";
import './style.css'

const TopicSelector = () => {

    return (
        <>
            <div id="topic-container">
                <form action="" method="get">
                    <label htmlFor= "difficulties">Select Difficulty: </label>
                    <select id="difficulties" name="difficulties">
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <input type="submit"/>
                    <label htmlFor= "questions">Number of Questions: </label>
                    <select id="questions" name="questions">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </form>
                
            </div>
        </>
    )

};





export default TopicSelector;