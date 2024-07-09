import React from "react"
import { Route, Routes } from "react-router-dom"

import { ChatScreen } from "./Screens"
import ChatsListScreen from "./Screens/ChatsListScreen/ChatsListScreen"

import { traerContactosLS } from "./Screens"


function App() {

    const contactos = traerContactosLS()

    return (
        <Routes>
            <Route path="/" element={<ChatsListScreen />} />
            <Route path='chat/:id' element={<ChatScreen />} />
        </Routes>
    )
}

export default App
