import React, { useState } from "react";
import './style.css'
import {ScienceCard, SportsCard, BookCard, FilmCard} from "../index"

const TopicSelector = () => {

    return (
        <>
            <div id="topic-container">
                <form action="" method="get">
                    <div class="col-25">
                        <label htmlFor= "difficulties">Select Difficulty:</label>
                    </div>
                        <div class="options">
                            <select id="difficulties" name="difficulties">
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                    
                    
                    <br></br>
                    <div class="col-25">
                        <label htmlFor= "questions">Number of Questions:</label>
                    </div>
                            <div class="options">
                                <select id="questions" name="questions">
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    
                                </select>
                            </div>
                            
                    <br></br>
                    <FilmCard />
                    <ScienceCard />
                    <SportsCard />
                    <BookCard />
                    
                <input type="submit"/>
                </form>
            </div>
        </>
    )

};





export default TopicSelector;