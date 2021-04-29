import React from "react";
import './style.css';

const IconCard = ({ icon, selectIcon }) => {
    
    return (
        <>
            <div className="icon-card" id={icon.id}>
                <img className="icon-img" src={icon.url} onClick= {()=>selectIcon(icon.id)} tabIndex="0"/>
            </div>

        </>
    )
}

export default IconCard;