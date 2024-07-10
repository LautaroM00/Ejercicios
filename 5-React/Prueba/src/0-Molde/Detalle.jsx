import React from 'react'
import { useParams } from 'react-router-dom'

import './estilos/Home.css'

import { productos }  from './index.js'

const Detalle = () => {

    const urlParams = useParams()

    let productoId = productos.find((producto) => {
        return(producto.id === Number(urlParams.productId))
    })

    const { titulo, precio, detalle, id } = productoId

    return (
        <article>
            <h1>{titulo}</h1>
            <div>
                {detalle}
            </div>
        </article>
    )
}

export default Detalle