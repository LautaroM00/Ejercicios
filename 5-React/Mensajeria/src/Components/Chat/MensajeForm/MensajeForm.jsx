import React from 'react'
import './MensajeForm.css'
import enviar from "../../../../iconos/enviar.png"
import { useState } from 'react'

export const MensajeForm = ({ lista, funcionBoton }) => {

    const handleSubmit = (evento) =>{
        evento.preventDefault()
        let mensajeNuevo = evento.target[0].value

        funcionBoton(mensajeNuevo)

        evento.target[0].value = ''
    }


    return (
        <form className='input-submit' onSubmit={handleSubmit}>
            <input className='input-mensaje'/>
            <button type='submit'><img src={enviar} style={{width:"20px"}}/></button>
        </form>
    )
}
