import React from 'react'
import "./ChatHeaderInfo.css"
import camaraIcono from "../../../../iconos/camara.png"
import telefono from "../../../../iconos/telefono.png"
import tresPuntos from "../../../../iconos/puntos.png"
import { HiArrowSmLeft } from "react-icons/hi";
import { Link } from 'react-router-dom'

export const ChatHeaderInfo = ({ nombre, thumbnail }) => {

    if (thumbnail === '') {
        thumbnail = "../../../../assets/defaultUser.png"
        nombre = ''
    }

    return (
        <div className='header'>
            <div className='izquierda'>
                <Link to={'/'} style={{display:'flex'}}>
                    <HiArrowSmLeft style={{color: 'white',width:'25px',height:'30px'}} />
                </Link>
                <img src={thumbnail} className='fotoPerfil' alt='foto-perfil' />
                <h3>
                    {nombre}
                </h3>
            </div>
            <div className='derecha'>
                <img src={camaraIcono} alt="icono-camara" />
                <img src={telefono} alt="icono-telefono" />
                <img src={tresPuntos} alt="icono-tres-puntos" />
            </div>
        </div>
    )
}
