import React from 'react'
import './MensajeForm.css'
import enviar from "../../../../iconos/enviar.png"

export const MensajeForm = ({ agregarMensaje }) => {

    const handleSubmit = (evento) =>{
        evento.preventDefault()
        let mensajeNuevo = evento.target[0].value

        agregarMensaje(mensajeNuevo)

        evento.target[0].value = ''
    }


    return (
        <form className='input-submit' onSubmit={handleSubmit}>
            <input className='input-mensaje'/>
            <button type='submit'><img src={enviar} style={{width:"20px"}}/></button>
        </form>
    )
}
