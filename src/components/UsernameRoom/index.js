import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from "../../actions";

import './style.css'

function UsernameRoom({ joinRoom }) {

    const [username, setUsername] = useState("")
    const [room, setRoom] = useState("")

    const dispatch = useDispatch();
    const error = useSelector(state => state.error);
    const user = useSelector(state => state.user)

    useEffect(() => {
         if(user.name !== "") joinRoom({ user, room });
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(addUser(username));   
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
