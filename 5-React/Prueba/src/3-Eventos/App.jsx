import React from "react";

const funciones = {
    saludar: () => alert('Hola!'),
    despedirse: () => alert('Adios'),
    sumar: () => alert(3 + 5)
}

const mensajes = [
    'buen dia',
    'buenas tardes',
    'buenas noches'
]

const Boton = ({mensaje, funcion}) => {
    return(
        <button onClick={funcion}>{mensaje}</button>
    )
}

const Botonera = () => {
    return(
        <>
            <Boton mensaje={mensajes[0]} funcion={funciones.saludar} />
            <Boton mensaje={mensajes[1]} funcion={funciones.despedirse} />
            <Boton mensaje={mensajes[2]} funcion={funciones.sumar} />
        </>
    )
}
















export default Botonera