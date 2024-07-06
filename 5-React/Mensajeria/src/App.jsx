import React from "react"
import { ChatScreen } from "./Screens"
import { Route, Routes } from "react-router-dom"
import ChatsListScreen from "./Screens/ChatsListScreen/ChatsListScreen"
import { traerContactosLS } from "./Screens"


function App() {

    const contactos = traerContactosLS()

    return (
        <Routes>
            <Route path="/" element={<ChatsListScreen />}></Route>
            {contactos.map((datosContacto, index) => {
                let ruta = datosContacto.id
                return(
                    <Route path={`chat/${ruta}`} element={<ChatScreen MOOK_DATA={datosContacto}/>} key={index}></Route>
                )
            })}
        </Routes>
    )
}

export default App
