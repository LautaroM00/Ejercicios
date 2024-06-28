import React from 'react'
import { Mensaje } from '../index'
import './ListaMensajes.css'

export const ListaMensajes = ({ lista }) => {
    return (
        <>
            {lista.map((mensaje) => {
                let direccion
                let colorFondo
                const { author, id, } = mensaje
                    if(author === 'yo'){
                        direccion = 'end'
                        colorFondo = "#005c4b"
                    }
                return(
                <div className='contenedor' style={{ justifyContent: direccion }} key={id}>
                    <Mensaje lista={mensaje} key={id} colorFondo={colorFondo}/>
                </div>
                )
            })}
        </>
    )
}
