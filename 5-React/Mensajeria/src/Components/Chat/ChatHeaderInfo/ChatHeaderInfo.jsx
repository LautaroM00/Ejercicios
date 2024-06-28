import React from 'react'
import "./ChatHeaderInfo.css"
import messi from "../../../../assets/messi.jpg"
import camaraIcono from "../../../../iconos/camara.png"
import telefono from "../../../../iconos/telefono.png"
import tresPuntos from "../../../../iconos/puntos.png"

export const ChatHeaderInfo = () => {
    return (
        <div className='header'>
            <div className='izquierda'>
                <img src={messi} className='fotoPerfil' alt='foto-perfil'/>
                <h3>
                    Messi
                </h3>
            </div>
            <div className='derecha'>
                <img src={camaraIcono} alt="icono-camara"/>
                <img src={telefono} alt="icono-telefono" />
                <img src={tresPuntos} alt="icono-tres-puntos" />
            </div>
        </div>
    )
}
