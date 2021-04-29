import React from "react";
import './style.css'

const TopicCard = ({ topic, selectCard }) => {
    
    return (
        <>
            <div className="topic-card" id={topic.id} tabIndex="0" onClick={()=>selectCard(topic.id)}>
                <img className="topic-img" src={topic.image} />
                <div className="topic-info">
                    <h3><b>{topic.name}</b></h3>
                </div>
            </div>

        </>
    )
}

export default TopicCard;



