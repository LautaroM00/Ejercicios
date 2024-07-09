import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import './ChatScreen.css'

import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../../Components/Chat'

import { guardarMensajeLS, traerContactosLS, contactos } from '../index'




export const ChatScreen = () => {

    let urlParams = useParams()
    let idParams = urlParams.id
    const MOOK_DATA = contactos.find((contacto) => contacto.id === Number(idParams))

    const { mensajes, nombre, thumbnail, id } = MOOK_DATA

    const [sumatoriaMensajes , addMsj] = useState(mensajes)

    const contactosLS = traerContactosLS()

    const buscarMensajes = contactosLS.find((contacto) => {
        return(contacto.nombre === nombre)
    })

    const mensajesLS = buscarMensajes.mensajes

/*     const mensajesLS = contactosLS[id - 1].mensajes */

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