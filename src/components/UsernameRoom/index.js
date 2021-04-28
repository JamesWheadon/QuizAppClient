import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, setIcon } from "../../actions";
import { IconCard } from '../index'


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
    const icons = [
        {
            id: "1",
            icon: "https://image.flaticon.com/icons/png/512/1680/1680373.png",
        },
        {
            id: "2",
            icon: "https://image.flaticon.com/icons/png/512/1680/1680378.png",
        },
        {
            id: "3",
            icon: "https://image.flaticon.com/icons/png/512/2119/2119228.png",
        },
        {
            id: "4",
            icon: "https://image.flaticon.com/icons/png/512/1835/1835142.png",
        },
        {
            id: "5",
            icon: "https://image.flaticon.com/icons/png/512/818/818089.png",
        }
    ]
    const iconsList = icons.map(icon => {
        return (
            <IconCard key={icon.id} icon={icon} selectIcon={handleIconSelection} />
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
                <p>Select an Icon:</p>
                {iconsList}
            </div>
            <button type="submit">Join Room</button>
        </form>
    );
};

export default UsernameRoom;
