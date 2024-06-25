import "./colorCard.css"
import React from "react"
import { BloqueColores } from "../bloqueColores/bloqueColores"
import { LikeButton } from "../likeButton/likeButton"
import { TimeAgo } from "../timeAgo/timeAgo"

export function ColorCard(prop) {
	return (
	<>
		<div className="carta">
			<BloqueColores colores={prop.colores} />
			<div className="likeBtn-timeAgo">
				<LikeButton likes={prop.likes} />
				<TimeAgo tiempo={prop.timeAgo}/>
			</div>
		</div>
	</>
	)
}

export default ColorCard
