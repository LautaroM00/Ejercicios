import React from "react";
import { useState } from "react";

const array = ['hola', 'adios', 'buen dia', 'buenas tardes']



const App = () => {

    const [index , setIndex] = useState(0)
    
    const adelante = () => {
        setIndex(index + 1)
    }

    const atras = () => {
        setIndex(index - 1)
    }


    return(
        <>
            <h1>{array[index]}</h1>
            <button onClick={adelante}>Siguiente</button>
            <button onClick={atras}>Anterior</button>
        </>
    )

}











export default App