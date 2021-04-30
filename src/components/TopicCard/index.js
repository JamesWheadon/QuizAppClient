import React from "react";
import './style.css'

const TopicCard = ({ topic, selectCard, selected }) => {
    
    return (
        <>
            <div role="topic" className={selected == topic.id ? "topic-card chosen" : "topic-card"} id={topic.id} onClick={()=>selectCard(topic.id)}>
                <img className="topic-img" src={topic.image} />
                <div className="topic-info">
                    <h3><b>{topic.name}</b></h3>
                </div>
            </div>

        </>
    )
}

export default TopicCard;



