import React, { useState, useEffect } from 'react'
import { traerProductos } from '.'
import './styles/Home.css'

const Home = () => {

    const [productos, setProductos] = useState([])
    const [productosFiltro, setProductosFiltro] = useState(productos)
    const [isLoading, setLoading] = useState(true)
    const [stringFiltro, setStringFiltro] = useState('')
    const [contador, setContador] = useState(0)

    useEffect(() => {
        (isLoading && setTimeout(() => {
            traerProductos().then((productos) => {
                setProductos(productos)
                setProductosFiltro(productos)
                setLoading(false)
            })
        }, 1000))
        const productosFiltrados = productos.filter((producto) => {
            const titulo = producto.titulo
            return titulo.toLowerCase().includes(stringFiltro)
        })
        setProductosFiltro(productosFiltrados)
    },
        [stringFiltro]
    )

    const handleChange = (e) => {
        setStringFiltro(e.target.value)
    }

    console.log(productosFiltro[contador])

    const handleScrollSiguiente = () => {
        scrollBy(0,500)
    }

    const handleScrollAnterior = () => {
        scrollTo()
    }

    return (
        <>
            <div className='boton'>
                <button onClick={handleScrollSiguiente}>siguiente</button>
                <button>anterior</button>
            </div>
            <div className='contenedor'>
                {isLoading ?
                    <div>Cargando...</div> :
                    <>
                        <input style={{ width: '200px' }} placeholder='Filtrar productos' onChange={handleChange} value={stringFiltro}></input>
                        {
                            productosFiltro.map(
                                (producto, index) => {
                                    const { titulo, precio, detalle } = producto
                                    return (
                                        <div className='productos' key={index}>
                                            <h1>{titulo}</h1>
                                            <span>{precio}</span>
                                            <p>{detalle}</p>
                                        </div>
                                    )
                                }
                            )
                        }
                    </>
                }
            </div>
        </>
    )
}

export default Home