import React from 'react'
import './ChatsListScreen.css'

import { ChatsList, ChatsPreviewFooter, ChatsPreviewHeader } from '../../Components/ChatsPreview'

const ChatsListScreen = () => {
    return (
        <div className={'pantalla'}>
            <div className={'ChatsListScreen'}>
                <ChatsPreviewHeader />
                <ChatsList />
{/*                 <ChatsPreviewFooter /> */}
            </div>
        </div>
    )
}

export default ChatsListScreen