import React from "react";
import './style.css';

const IconCard = ({ icon, selectIcon }) => {
    
    return (
        <>
            <div className="icon-card" id={icon.id}>
                <img className="icon-img" src={icon.icon} onClick= {()=>selectIcon(icon.id)} />
            </div>

        </>
    )
}

export default IconCard;