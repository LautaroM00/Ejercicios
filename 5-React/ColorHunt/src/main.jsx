import React from 'react'
import ReactDOM from 'react-dom/client'
import ColorCard from './colorCard/colorCard'
import data from "../resources/timeAgo.json"

const URL_COLOR = "https://gist.githubusercontent.com/jennyknuth/e2d9ee930303d5a5fe8862c6e31819c5/raw/e4ec571a9b49ddc5c1789a4e7f3c67ec5271398e/colors.json"

const obtenerColores = async () =>{
    const response = await fetch(URL_COLOR, {
        method: "get"
    })

    const colores = await response.json()

    return colores
}

const colores = await obtenerColores() //Traigo array de objetos del link

const cantidadDeRenders = [1,1,1,1,1,1,1] //se renderizarán tantos componentes según cuántos elementos haya dentro de este array. [1,1,1] => tres cartas, [1,1,1,1,1,1] => seis cartas. El valor del elemento es indiferente. No debería ser así pero en un principio realicé el mapeo en función de 'data' y como la renderización quedó atada al método de mapeo decidí crear sustituir 'data' con un array nuevo cuya única función sea, según su longitud, determinar cuantas cartas se renderizarán.

let carta = cantidadDeRenders.map((elemento, index, array) => {
    let randomUno = parseInt(Math.random() * 100)
    let randomDos = parseInt(Math.random() * 100)  //por cada mapeo, las 4 variables guardan un numero random, distinto para cada una, del 0 al 100 (porque tengo 140 colores en mi array).
    let randomTres = parseInt(Math.random() * 100)
    let randomCuatro = parseInt(Math.random() * 100)

    let tiempoRandom = parseInt(Math.random() * 10) //idem

    let likesRandom = parseInt(Math.random() * 1000)

    return(
    <ColorCard 
        colores={[colores[randomUno],colores[randomDos],colores[randomTres],colores[randomCuatro]]}  //cada ReactElement tendrá como valor en la prop 'colores' un array de 4 objetos, siendo cada uno un objeto de colores distintos entre ellos y entre Re.
        timeAgo={data[tiempoRandom]} //cada ReactElement tendrá como valor en la prop timeAgo un valor distinto del array tomado desde el import 'data'
        key={index}
        likes={likesRandom}
        />)
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        {carta}
    </>
)
