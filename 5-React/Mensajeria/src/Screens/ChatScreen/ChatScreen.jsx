import React from 'react'
import { useState } from 'react'

import './ChatScreen.css'

import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../../Components/Chat'

import { MOOK_MENSAJES } from '..'




export const ChatScreen = () => {

    const [sumatoriaMensajes , addMsj] = useState(MOOK_MENSAJES)

    const agregarMensaje = (mensaje) => {
        addMsj(
            [...sumatoriaMensajes,{
                author: 'yo',
                text: mensaje,
                estado: 'visto',
                day: 'hoy',
                hour: '13:28',
                id: sumatoriaMensajes.length + 1
            }]
        )
    }

    return (
        <div className="pantalla">
            <ChatHeaderInfo />
            <div className='chat'>
                <ListaMensajes lista={sumatoriaMensajes}/>
            </div>
            <MensajeForm agregarMensaje={agregarMensaje}/>
        </div>
    )
}