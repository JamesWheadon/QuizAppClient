import React, { useState, } from "react";
import './style.css'
import { TopicCard } from "../index"

const QuizForm = ({ handleFormSubmit }) => {

    const [input, setInput] = useState(
        {
            difficulty: 'Easy',
            length: 10,
            category: 11
        }
    );

    const handleTopicSelection = (selectedTopic) => {
        setInput(prev => ({
            ...prev,
            category: selectedTopic
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        handleFormSubmit(input);
        setInput({
            difficulty: "",
            length: "",
            category: ""
        });
    }

    const handleChange = e => {
        console.log(input)
        setInput(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        console.log(input)
    }


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
            name: "Animals",
            image: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        }
    ]
    const topicsList = topics.map(topic => {
        return (<TopicCard key={topic.id} topic={topic} selectCard={handleTopicSelection} />
        )
    })
    return (
        <form role="form" className="quiz-form" action="" method="get" onSubmit={handleSubmit}>
            <div id="topic-container">
                {topicsList}
            </div>

            {/* <div className="col-25"> */}
                <label htmlFor="difficulties">Difficulty:</label>
            {/* </div> */}
            {/* <div className="options"> */}
                <select role="difficulty" id="difficulties" name="difficulty"
                    value={input.difficulty} onChange={handleChange}>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            {/* </div> */}
            {/* <div className="col-25"> */}
                <label htmlFor="questions">Number of Questions:</label>
            {/* </div> */}
            {/* <div className="options"> */}
                <select role="questions" id="questions" name="length"
                    value={input.length} onChange={handleChange}>
                        {/* for easier debug */}
                    <option value="2" >2</option> 
                    <option value="5" >5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            {/* </div> */}
            
            <button type="submit"> Start Quiz </button>
        </form>
    )

};





export default QuizForm;