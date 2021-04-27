import React from "react";
import './style.css'

const TopicCard = ({ topic, selectCard }) => {
    
    return (
        <>
            <div className="topic-card" id={topic.id}>
                <img className="topic-img" src={topic.image} onClick= {()=>selectCard(topic.id)} />
                <div className="topic-info">
                    <h3><b>{topic.name}</b></h3>
                    <p>Click to select</p>
                </div>
            </div>

        </>
    )
}

export default TopicCard;



