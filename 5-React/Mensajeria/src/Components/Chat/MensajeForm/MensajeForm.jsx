import React from 'react'
import './MensajeForm.css'
import enviar from "../../../../iconos/enviar.png"

export const MensajeForm = () => {
    return (
        <div className='input-submit'>
            <input className='input-mensaje'/>
            <button type='submit'><img src={enviar} style={{width:"20px"}}/></button>
        </div>
    )
}
