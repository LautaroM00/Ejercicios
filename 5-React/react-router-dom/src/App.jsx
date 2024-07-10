import React from "react"
import { Cart, Home, Detail, Contact } from './Pages/index.js'
import { Routes, Route } from "react-router-dom"

function App() {

    return (
        <Routes>
            <Route path={'/'}        element={<Home />}></Route>
            <Route path={'/detail'}  element={<Detail />}></Route>
            <Route path={'/Contact'} element={<Contact />}></Route>
            <Route path={'/Home'}    element={<Home />}></Route>
            <Route path={'/Cart'}    element={<Cart />}></Route>
        </Routes>
    )
}

export default App
