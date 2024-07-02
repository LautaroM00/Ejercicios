import React from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../Components/Chat'
import { useState } from 'react'

export const ChatScreen = () => {
    const MOOK_MENSAJES = [
        {
            author: 'yo',
            text: 'Leo, como andas todo piola?',
            estado: 'visto',
            day: 'hoy',
            hour: '13:15',
            id: '1'
        },
        {
            author: 'pepe',
            text: 'si bien taba jugando al fubol',
            estado: 'visto',
            day: 'hoy',
            hour: '13:16',
            id: '2'
        },
        {
            author: 'yo',
            text: 'que baile pegaste no?',
            estado: 'visto',
            day: 'hoy',
            hour: '13:17',
            id: '3'
        },
        {
            author: 'pepe',
            text: "ma vale",
            estado: 'visto',
            day: 'hoy',
            hour: '13:18',
            id: '4'
        },        {
            author: 'yo',
            text: `Ojo con q nos puede tocar mexico en 4tos...`,
            estado: 'visto',
            day: 'hoy',
            hour: '13:19',
            id: '5'
        },
        {
            author: 'pepe',
            text: 'y quien juega',
            estado: 'visto',
            day: 'hoy',
            hour: '13:20',
            id: '6'
        },       
        {
            author: 'pepe',
            text: 'el chavo de 9 y ataja quico',
            estado: 'visto',
            day: 'hoy',
            hour: '13:20',
            id: '7'
        },
        {
            author: 'yo',
            text: 'JAJAJA y don ramon',
            estado: 'visto',
            day: 'hoy',
            hour: '13:20',
            id: '8'
        },        
        {
            author: 'yo',
            text: 'de wing izquierdo',
            estado: 'visto',
            day: 'hoy',
            hour: '13:20',
            id: '9'
        },
        {
            author: 'pepe',
            text: "../../../../assets/messiYsi.jpg",
            estado: 'visto',
            day: 'hoy',
            hour: '13:22',
            id: '10'
        },        
        {
            author: 'yo',
            text: '127 millones y no pueden juntar',
            estado: 'visto',
            day: 'hoy',
            hour: '13:23',
            id: '11'
        },
        {
            author: 'yo',
            text: '11 q pateen una pelota',
            estado: 'visto',
            day: 'hoy',
            hour: '13:23',
            id: '12'
        },
        {
            author: 'pepe',
            text: 'viste, una cosa de loko',
            estado: 'visto',
            day: 'hoy',
            hour: '13:27',
            id: '13'
        },
        {
            author: 'yo',
            text: 'y se quieren sentar en nuestra mesa',
            estado: 'visto',
            day: 'hoy',
            hour: '13:27',
            id: '14'
        },
        {
            author: 'yo',
            text: 'mamadera que moral...',
            estado: 'visto',
            day: 'hoy',
            hour: '13:28',
            id: '15'
        }
    ]

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
        <>
            <ChatHeaderInfo />
            <div className='chat'>
                <ListaMensajes lista={sumatoriaMensajes}/>
            </div>
            <MensajeForm lista={MOOK_MENSAJES} funcionBoton={agregarMensaje}/>
        </>
    )
}