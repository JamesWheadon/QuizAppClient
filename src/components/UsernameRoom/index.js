import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, setIcon } from "../../actions";
import { icons } from "../../images/userIcons";
import { IconCard } from '../index'

import './style.css'

function UsernameRoom({ joinRoom }) {

    const [username, setUsername] = useState("")
    const [room, setRoom] = useState("")

    const dispatch = useDispatch();
    const error = useSelector(state => state.error);
    const user = useSelector(state => state.user)

    useEffect(() => {
        if (user.name !== "") joinRoom({ user, room });
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(username));
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
        dispatch(setIcon(selectedIcon));
    }

    const iconsList = icons.map(icon => {
        return (
            <IconCard key={icon.id} icon={icon} selectIcon={handleIconSelection} />
        )
    })


    return (
        <form className="room-form" onSubmit={handleSubmit} role="form">

            <label>Username
                <input className="username-input" type="text" value={username} onChange={updateUsernameInput} />
            </label>
            <label>Room code
                <input type="text" value={room} onChange={updateRoomInput} />
            </label>
            <p className="icon-text">Select an Icon:</p>
            <div id="icon-container">
                
                {iconsList}
            </div>
            <button type="submit">Join Room</button>
        </form>
    );
};

export default UsernameRoom;
