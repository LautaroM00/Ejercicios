import React from "react";
import "./timeAgo.css"

export const TimeAgo = (prop) => {
    return(
        <span className="timeAgo">
            {prop.tiempo}
        </span>
    )
}