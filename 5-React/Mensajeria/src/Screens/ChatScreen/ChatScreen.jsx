import React from 'react'
import { useState } from 'react'

import './ChatScreen.css'

import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../../Components/Chat'

import { guardarMensajeLS, traerContactosLS } from '../index'




export const ChatScreen = ({ MOOK_DATA }) => {

    const { mensajes, nombre, thumbnail, id } = MOOK_DATA

    const [sumatoriaMensajes , addMsj] = useState(mensajes)

    const contactosLS = traerContactosLS()

    const mensajesLS = contactosLS[id - 1].mensajes

    const agregarMensaje = (mensaje) => {
        addMsj(
            [...sumatoriaMensajes,{
                author: 'Tú',
                text: mensaje,
                estado: 'visto',
                day: 'hoy',
                hour: '13:28',
                id: sumatoriaMensajes.length + 1
            }]
        )

        guardarMensajeLS(id - 1, {
            author: 'Tú',
            text: mensaje,
            estado: 'visto',
            day: 'hoy',
            hour: '13:28',
            id: mensajesLS.length + 1
        })
    }

    return (
        <div className="pantalla">
            <div className='ChatScreen'>
                <ChatHeaderInfo nombre={nombre} thumbnail={thumbnail}/>
                <div className='chat'>
                    <ListaMensajes lista={mensajesLS}/>
                </div>
                <MensajeForm agregarMensaje={agregarMensaje}/>
            </div>
        </div>
    )
}