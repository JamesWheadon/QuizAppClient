import React, { useState } from "react";
import './style.css'
import { TopicCard } from "../index"

const TopicSelector = () => {
    const handleSubmit = event => {
        event.preventDefault()
    }
    const [selectTopic, setSelectTopic]= useState("");


    const topics = [
        {
            id: "11",
            name: "Films",
            image: "https://images.unsplash.com/photo-1606579340811-55b2a1ce720c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1065&q=80",
        },

        {
            id: "17",
            name: "Science",
            image: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80",
        },

        {
            id: "21",
            name: "Sports",
            image: "https://images.unsplash.com/flagged/photo-1568105631375-d992b82a905b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        },
        {
            id: "10",
            name: "Books",
            image: "https://images.unsplash.com/photo-1520387294843-fd994fd872e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
        },
        {
            id: "27",
            name:"Animals",
            image:"https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        }
    ]
    const topicsList = topics.map(topic => {
        return (<TopicCard key= {topic.id} topic={topic} selectCard={setSelectTopic} />
        )
    })
    return (
        <>
            <div id="topic-container">
                <form action="" method="get" onSubmit={handleSubmit}>
                    <div className="col-25">
                        <label htmlFor="difficulties">Select Difficulty:</label>
                    </div>
                    <div className="options">
                        <select id="difficulties" name="difficulties">
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>


                    <br></br>
                    <div className="col-25">
                        <label htmlFor="questions">Number of Questions:</label>
                    </div>
                    <div className="options">
                        <select id="questions" name="questions">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>

                        </select>
                    </div>
                    {topicsList}
                    <input type="submit" />
                </form>
            </div>
        </>
    )

};





export default TopicSelector;