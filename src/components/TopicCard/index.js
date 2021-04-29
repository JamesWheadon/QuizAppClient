import React from "react";
import './style.css'

const TopicCard = ({ topic, selectCard }) => {
    
    return (
        <>
            <div className="topic-card" id={topic.id} tabIndex="0">
                <img className="topic-img" src={topic.image} onClick= {()=>selectCard(topic.id)} />
                <div className="topic-info">
                    <h3><b>{topic.name}</b></h3>
                </div>
            </div>

        </>
    )
}

export default TopicCard;



