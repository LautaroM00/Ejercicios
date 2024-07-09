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
            {contactos.map((datosContacto, index) => {
                let ruta = datosContacto.id
                return(
                    <Route path={`chat/${ruta}`} element={<ChatScreen MOOK_DATA={datosContacto}/>} key={index} />
                )
            })}
        </Routes>
    )
}

export default App
