import React from "react"

const datosAdmin = {
	nombre: 'Lautaro',
	apellido: 'Miceli',
	edad: 24,
	localidad: 'Berisso',
	'estado civil': 'soltero'
}

let esAdmin

export let admin


const Admin = () => {
	return(
		<>
			<h1>
				{datosAdmin.nombre} {datosAdmin.apellido}
			</h1>
			<ul>
				<li>{datosAdmin.edad}</li>
				<li>{datosAdmin.localidad}</li>
				<li>{datosAdmin['estado civil']}</li>
			</ul>
		</>
	)
}

const Usuario = () => {
	return(
		<>
			<h1>Usted no es admin</h1>
		</>
	)
}




export default function App() {
	return (
		<>
			{true ? 
			<Admin /> : 
			<Usuario />}
		</>
	)
}