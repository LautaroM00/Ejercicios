import React from 'react'
import './ChatPreview.css'

const ChatPreview = ({ datos }) => {

    const { nombre, thumbnail, ultima_conexion, mensajes } = datos

    let colorSticker

    let ultimoMensaje       = mensajes[mensajes.length - 1].text
    let ultimoMensajeTiempo = mensajes[mensajes.length - 1].hour

    let autorMensaje        = mensajes[mensajes.length - 1].author

    if (ultimoMensaje.length > 13) {
        ultimoMensaje = ultimoMensaje.slice(0, 13) + '...'
    }

    if(ultimoMensaje.startsWith('../')){
        ultimoMensaje = '✨Sticker'
        colorSticker = '#79889280'
    }

    return (
            <div className='ChatPreview'>
                <img src={thumbnail} alt="" className='thumbnail' />
                <div className='datos'>
                    <div className='medio'>
                        <span>
                            {nombre}
                        </span>
                        <div>
                            {`${autorMensaje}: `}
                            <span style={{color: colorSticker,fontStyle:'italic'}}>{ultimoMensaje}</span>
                        </div>
                    </div>
                    <span className='derecha'>
                        {ultimoMensajeTiempo}
                    </span>
                </div>
            </div>
    )
}

export default ChatPreview