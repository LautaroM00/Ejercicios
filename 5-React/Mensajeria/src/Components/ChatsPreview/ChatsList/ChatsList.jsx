import React, { useEffect, useState } from 'react'
import './ChatsList.css'
import { ChatPreview } from '../index'
import { Link } from 'react-router-dom'
import { fetchContactos } from '../../../Screens'
import { defaultChatPreview } from './loading.js'

const ChatsList = () => {

    const [contactos, setContactos] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(
        () => {
            setTimeout(() => {
                fetchContactos().then((contactos) => {
                    setContactos(contactos)
                    setLoading(false)
                })
            },
                1000
            )
        }
    )

    return (
        <div className='ChatsList'>
            {
                isLoading ?
                    <>
                        <ChatPreview datos={defaultChatPreview[0]} />
                        <ChatPreview datos={defaultChatPreview[0]} />
                        <ChatPreview datos={defaultChatPreview[0]} />
                    </> :
                    contactos.map((chat, index) => {
                        return (
                            <Link key={index} to={'chat/' + chat.id}>
                                <ChatPreview datos={chat} />
                            </Link>
                        )
                    })
            }
        </div>
    )
}

export default ChatsList