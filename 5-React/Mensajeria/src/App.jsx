import React from "react"
import { Route, Routes } from "react-router-dom"

import { ChatScreen } from "./Screens"
import LupitaFiltro from "./Components/Chat/ChatHeaderInfo/LupitaFiltro/LupitaFiltro"
import ChatsListScreen from "./Screens/ChatsListScreen/ChatsListScreen"

function App() {

    return (
        <Routes>
            <Route path="/" element={<ChatsListScreen />} />
            <Route path='chat/:id' element={<ChatScreen />} />
            <Route path='pruebaLupita' element={<LupitaFiltro />} />
        </Routes>
    )
}

export default App
