import React from 'react';
import { icons } from "../../images/userIcons";
import './style.css'

function RoomUser({ user }) {
    let userIcon;
    for (const icon of icons) {
        if (icon.id === user.icon) {
            userIcon = icon.url;
        }
    }
    return (
        <div className="userInRoom">
            <img className="userIcon" src={userIcon} />
            <h4 className="userName">{user.name}</h4>
        </div>
    )
}

export default RoomUser;