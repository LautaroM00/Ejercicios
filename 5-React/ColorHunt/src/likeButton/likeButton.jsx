import React from "react";
import corazonPNG from "../../assets/heart.png"
import "./likeButton.css"

export const LikeButton = (prop) => {
    return(
        <div className="like-btn">
            <img src={corazonPNG} style={{height:"16px"}} alt="btn-corazon"></img>
            <span>{prop.likes}</span>
        </div>
    )
}