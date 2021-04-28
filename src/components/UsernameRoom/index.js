import React, { useState } from 'react';

import './style.css'

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


    return (
        <form className="room-form" onSubmit={handleSubmit} role="form">
            <label>Username
                <input type="text" value={username} onChange={updateUsernameInput} />
            </label>
            <label>Room code
                <input type="text" value={room} onChange={updateRoomInput} />
            </label>
            <button type="submit">Join Room</button>
        </form>
    );
};

export default UsernameRoom;
