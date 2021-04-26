import React, { useState } from 'react';

function UsernameRoom({ getResult }) {

    const [username, setUsername] = useState("")
    const [room, setRoom] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        getResult(location);
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
        <form onSubmit={handleSubmit} role="form">
            <label>Username:
                <input type="text" value={username} onChange={updateUsernameInput} />
            </label>
            <label>Room code:
                <input type="text" value={room} onChange={updateRoomInput} />
            </label>
            <button type="submit" value="Join Room" />
        </form>
    );
};

export default UsernameRoom;
