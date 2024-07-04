import React from 'react'
import './ChatsList.css'
import { ChatPreview, contactos } from '../index'

const ChatsList = () => {
    return (
        <div className='ChatsList'>
            {
                contactos.map((chat => {
                    return(
                        <ChatPreview datos={chat} key={chat.id} />
                )
                }))
            }
        </div>
    )
}

export default ChatsList