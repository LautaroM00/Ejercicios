import React from 'react'
import './ChatPreview.css'

const ChatPreview = ({ datos }) => {

    const { nombre, thumbnail, ultima_conexion, mensajes} = datos

    let ultimoMensaje       = mensajes[mensajes.length - 1].text
    let ultimoMensajeTiempo = mensajes[mensajes.length - 1].hour

    return (
        <div className='ChatPreview'>
            <img src={thumbnail} alt="" className='thumbnail'/>
            <div className='medio'>
                <span>
                    {nombre}
                </span>
                <div>
                    {ultimoMensaje}
                </div>
            </div>
            <div className='derecha'>
                {ultimoMensajeTiempo}
            </div>
        </div>
    )
}

export default ChatPreview