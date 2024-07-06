import React from 'react'
import './ChatsList.css'
import { ChatPreview, traerContactosLS } from '../index'
import { NavLink } from 'react-router-dom'
import { useParams, Link } from 'react-router-dom'

const ChatsList = () => {

    const contactos = traerContactosLS()

    return (
        <div className='ChatsList'>
            {
                contactos.map((chat => {
                    return(
                        <Link key={chat.id} to={'chat/' + chat.id}>
                            <ChatPreview datos={chat}  />
                        </Link>
                )
                }))
            }
        </div>
    )
}

export default ChatsList