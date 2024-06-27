import React from 'react'
import './ListaMensajes.css'

export const ListaMensajes = ({ lista }) => {

    return (
        <>
            {lista.map((mensaje) => {
                let direccion
                let colorFondo
                let url
                let imagen
                const { id, author, text, day, hour, estado} = mensaje
                    if(author === 'yo'){
                        direccion = 'end'
                        colorFondo = "#005c4b"
                    }
                    if(estado === 'visto'){
                        url = '../../../../assets/visto.png'
                    }
                    if(id === '4'){
                        imagen = <img src={"../../../../assets/gato.png"} style={{width:'170px'}}/>
                    }
                return(
                <div key={id} className='contenedor' style={{
                    justifyContent: direccion
                    }}>
                    <div className='mensaje' style={{backgroundColor:  colorFondo}}>
                        <p className='texto'>
                        {text}
                        </p>
                        {imagen}
                        <div className='contenedorInferior'>
                            <span className='timeSince'>
                                {`${day} ${hour}`}
                            </span>
                            <img src={url} style={{width: '20px'}}/>
                        </div>
                    </div>
                </div>
                )
            })}
        </>
    )
}
