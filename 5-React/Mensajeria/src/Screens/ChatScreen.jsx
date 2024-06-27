import React from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../Components/Chat'

export const ChatScreen = () => {
    const MOOK_MENSAJES = [
        {
            author: 'yo',
            text: 'Amor te tengo que contar algo',
            estado: 'visto',
            day: 'hoy',
            hour: '13:15',
            id: '1'
        },
        {
            author: 'pepe',
            text: 'que paso?',
            estado: 'visto',
            day: 'hoy',
            hour: '13:16',
            id: '2'
        },
        {
            author: 'yo',
            text: 'estoy embarazada',
            estado: 'visto',
            day: 'hoy',
            hour: '13:17',
            id: '3'
        },
        {
            author: 'pepe',
            text: `
            `,
            estado: 'visto',
            day: 'hoy',
            hour: '13:17',
            id: '4'
        }
    ]
    return (
        <div className='chat'>
{/*             <ChatHeaderInfo /> */}
            <ListaMensajes lista={MOOK_MENSAJES}/>
{/*             <MensajeForm /> */}
        </div>
    )
}