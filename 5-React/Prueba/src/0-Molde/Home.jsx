import React from 'react'
import { Link, NavLink } from 'react-router-dom'


import { productos } from './index.js'

import './estilos/Home.css'

const Home = () => {
    return (
        <nav className='lista'>
            {productos.map(({ titulo, precio, detalle, id }, index) => {
                return (
                    <div className='producto' key={index}>
                        <h2>
                            {titulo}
                        </h2>
                        <span>
                            {precio}
                        </span>
                        <div>
                            <Link to={`detalle/${id}`}>Ver más</Link>
                        </div>
                    </div>
                )
            })}
        </nav>
    )
}

export default Home