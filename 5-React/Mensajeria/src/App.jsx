import React from "react"
import { ChatScreen } from "./Screens"
import { Route, Routes } from "react-router-dom"
import ChatsListScreen from "./Screens/ChatsListScreen/ChatsListScreen"
import { traerContactosLS } from "./Screens"


function App() {

    const contactos = traerContactosLS()



    const [ datosMessi, datosCharly, datosDuki ] = contactos

    return (
        <Routes>
            <Route path="/" element={<ChatsListScreen />}></Route>
            <Route path="chat/1" element={<ChatScreen MOOK_DATA={datosMessi}/>}></Route>
            <Route path="chat/2" element={<ChatScreen MOOK_DATA={datosCharly}/>}></Route>
            <Route path="chat/3" element={<ChatScreen MOOK_DATA={datosDuki}/>}></Route>
        </Routes>
    )
}

export default App
