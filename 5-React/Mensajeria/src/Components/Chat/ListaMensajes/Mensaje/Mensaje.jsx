import React from 'react'
import "./Mensaje.css"
import { ProgressSpinner } from 'primereact/progressspinner'

export const Mensaje = ({ lista, colorFondo }) => {
    let url
    let imagen
    let { text, day, hour, estado, id } = lista
    if (estado === 'visto') {
        url = '../../../../assets/visto.png'
    }
    /*     if(text.startsWith('../')){
            imagen = <img src={text} style={{width:'170px'}}/>
            text = ''
        } */
    return (
        <>
            {(id === '') ?
                <div style={{display:'flex',justifyContent: 'center'}}>
                    <ProgressSpinner />
                </div> :
                <div className='mensaje' style={{ backgroundColor: colorFondo }}>
                    <p className='texto'>
                        {text}
                    </p>
                    {imagen}
                    <div className='contenedorInferior'>
                        <span className='timeSince'>
                            {`${day} ${hour}`}
                        </span>
                        <img src={url} style={{ width: '20px' }} />
                    </div>
                </div>
            }
        </>
    )
}
