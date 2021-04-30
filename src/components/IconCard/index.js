import React from "react";
import { useSelector } from "react-redux";
import './style.css';

const IconCard = ({ icon, selectIcon }) => {
    const chosenIcon = useSelector(state => state.user.icon)
    return (
        <>
            <div className="icon-card" id={icon.id}>
                <img className={chosenIcon == icon.id ? "icon-img selected" : "icon-img"} src={icon.url} onClick= {()=>selectIcon(icon.id)} alt="icons"/>
            </div>

        </>
    )
}

export default IconCard;