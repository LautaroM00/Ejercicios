import React from "react"
import { ChatScreen } from "./Screens"
import { Route, Routes } from "react-router-dom"
import ChatsListScreen from "./Screens/ChatsListScreen/ChatsListScreen"


function App() {

    return (
        <Routes>
            <Route path="/" element={<ChatScreen/>}></Route>
            <Route path="/chatslist" element={<ChatsListScreen />}></Route>
        </Routes>
    )
}

export default App
