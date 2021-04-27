import React, { useState } from "react";


const TopicCards = () =>{
    return (
        <>
        <div class="row">
            <div class="column">
                <div class="card" id="films-card">
                    <img id="topics-img" src="https://images.unsplash.com/photo-1606579340811-55b2a1ce720c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1065&q=80" size="width:100%"/>
                    <div class="container">
                        <h3><b>Movies</b></h3>
                        <p>Click to select</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card" id="science-card">
                <img id="topics-img" src="https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80" size="width:100%"/>
                    <div class="container">
                        <h3><b>Science</b></h3>
                        <p>Click to select</p>
                    </div>                    
                </div>
            </div>
            <div class="column">
                <div class="card" id="sports-card">
                <img id="topics-img"src="https://images.unsplash.com/flagged/photo-1568105631375-d992b82a905b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" size="width:100%" />
                    <div class="container">
                        <h3><b>Sports</b></h3>
                        <p>Click to select</p>
                    </div>                    
                </div>
            </div>
            <div class="column">
                <div class="card" id="books-card">
                <img id="topics-img" src="https://images.unsplash.com/photo-1520387294843-fd994fd872e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" size="width:100%"/>
                    <div class="container">
                        <h3><b>Books</b></h3>
                        <p>Click to select</p>
                    </div>                    
                </div>
            </div>
        </div>
        </>
    )
}

export default TopicCards;