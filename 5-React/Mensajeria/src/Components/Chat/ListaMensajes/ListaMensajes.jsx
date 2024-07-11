import React from 'react'
import { Mensaje } from '../index'
import './ListaMensajes.css'

export const ListaMensajes = ({ lista }) => {
    return (
        <>
            {lista.map((mensaje, index) => {
                return(
                    <Mensaje lista={mensaje} key={index}/>
                )
            })}
        </>
    )
}
