import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './ChatScreen.css'

import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../../Components/Chat'

import { fetchContactos } from '../index'




export const ChatScreen = () => {

    let urlParams = useParams()
    let idParams = urlParams.id

    const [filtroMensajes, setFiltroMensajes] = useState('hola')
    const [isLoading, setLoading] = useState(true)
    const [contactos, setContactos] = useState([
        {
            nombre: '',
            mensajes: [
                {
                    author: "",
                    text: "",
                    estado: "",
                    day: "",
                    hour: "",
                    id: ""
                }
            ],
            thumbnail: '',
            id: Number(idParams)
        }
    ])

    useEffect(() => {
        setTimeout(
            () => {
                fetchContactos()
                    .then((contactos) => {
                        setContactos(contactos)
                        const mensajesContacto = contactos[Number(idParams) - 1].mensajes
                        addMsj(mensajesContacto)
                        setLoading(false)
                    })
            }
            , 1000
        )
    },
        [filtroMensajes]
    )

    console.log('render')

    const MOOK_DATA = contactos.find((contacto) => contacto.id === Number(idParams))
    const { mensajes, nombre, thumbnail, id } = MOOK_DATA
    const [sumatoriaMensajes, addMsj] = useState(mensajes)

    /*     const mensajesLS = contactosLS[id - 1].mensajes */

    const agregarMensaje = (mensaje) => {
        addMsj(
            [...sumatoriaMensajes, {
                author: 'Tú: ',
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
            {isLoading
                ? <div className='ChatScreen'>
                    <ChatHeaderInfo nombre={nombre} thumbnail={thumbnail} filtroMensajes={filtroMensajes} setFiltroMensajes={setFiltroMensajes} isLoading={true}/>
                    <div className='chatLoading'>
                        <ListaMensajes lista={sumatoriaMensajes} isLoading={true}/>
                    </div>
                    <MensajeForm isLoading={true}/>
                </div>
                : <div className='ChatScreen'>
                    <ChatHeaderInfo nombre={nombre} thumbnail={thumbnail} filtroMensajes={filtroMensajes} setFiltroMensajes={setFiltroMensajes}/>
                    <div className='chat'>
                        <ListaMensajes lista={sumatoriaMensajes} />
                    </div>
                    <MensajeForm agregarMensaje={agregarMensaje} />
                </div>
            }
        </div>
    )
}