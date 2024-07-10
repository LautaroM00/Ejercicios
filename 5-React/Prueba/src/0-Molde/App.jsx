import React from "react"
import Home from "./Home.jsx"
import { Routes, Route } from "react-router-dom"
import Detalle from "./Detalle.jsx"

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="detalle/:productId" element={<Detalle />} />
		</Routes>
	)
}