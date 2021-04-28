import React, { useState } from 'react';
import {IconCard} from '../index'


function UsernameRoom({ joinRoom }) {

    const [username, setUsername] = useState("")
    const [room, setRoom] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        joinRoom({username: username, room: room});
    }

    const updateUsernameInput = e => {
        const input = e.target.value
        setUsername(input)
    }

    const updateRoomInput = e => {
        const input = e.target.value
        setRoom(input)
    }
    const handleIconSelection = (selectedIcon) => {
        setInput(prev => ({
            ...prev,
            icon: selectedIcon
        }))
    }
    const icons = [
        {
            id: "1",
            icon: "https://www.flaticon.com/premium-icon/icons/svg/3275/3275293.svg",
        },
        {
            id: "2",
            icon: "https://www.flaticon.com/premium-icon/icons/svg/3275/3275341.svg",
        },
        {
            id: "3",
            icon: "https://www.flaticon.com/svg/vstatic/svg/3275/3275233.svg?token=exp=1619603742~hmac=996322f21ca7c50b6d674ab7870c6ead",
        },
        {
            id: "4",
            icon: "https://www.flaticon.com/premium-icon/icons/svg/3275/3275356.svg",
        },
        {
            id: "5",
            icon: "https://www.flaticon.com/premium-icon/icons/svg/3275/3275371.svg",
        }
    ]
    const iconsList = icons.map(icon => {
        return(<IconCard key={icon.id} icon={icon} selectIcon={handleIconSelection} />
            )
    })


    return (
        <form className="room-form" onSubmit={handleSubmit} role="form">
            
            <label>Username
                <input type="text" value={username} onChange={updateUsernameInput} />
            </label>
            <label>Room code
                <input type="text" value={room} onChange={updateRoomInput} />
            </label>
            
            <div id="icon-container">
                <p>Select an Icon below:</p>
                
                {iconsList}
            </div>
            <button type="submit">Join Room</button>
        </form>
    );
};

export default UsernameRoom;
