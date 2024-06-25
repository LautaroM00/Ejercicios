import React from "react";
import "./bloqueColores.css"

export const BloqueColores = (prop) => {
    return(
        <div className="bloque-colores">

            <div className="color-4" style={{
                backgroundColor: prop.colores[0].hex,
                height:"38%"
                }}></div>

            <div className="color-3" style={{
                backgroundColor: prop.colores[1].hex,
                height:"26%"
                }}></div>

            <div className="color-2" style={{
                backgroundColor: prop.colores[2].hex,
                height:"20%"
                }}></div>

            <div className="color-1" style={{
                backgroundColor: prop.colores[3].hex,
                height:"16%"
                }}></div>

        </div>
    )
}