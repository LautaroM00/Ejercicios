import React from 'react'
import './ChatsPreviewHeader.css'

const ChatsPreviewHeader = () => {
    return (
        <div className='ChatsPreviewHeader'>
            <div className={'arriba'}>
                <h2>WhatsApp</h2>
                <div>
                </div>
            </div>
            <div className={'abajo'}>
                <div className={'selectorChat'}>
                    <span>
                        CHATS
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ChatsPreviewHeader