import React from 'react'
import './ChatsList.css'
import { ChatPreview, contactos } from '../index'
import { NavLink } from 'react-router-dom'
import { useParams, Link } from 'react-router-dom'

const ChatsList = () => {
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