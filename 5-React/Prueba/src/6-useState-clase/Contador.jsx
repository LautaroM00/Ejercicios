import React from "react";
import { useState } from "react";


export const Contador = ({ limit }) =>{
    const [valor, setContador] = useState(2)

    const handleIncrementar = () => {
        if(valor < limit){
            setContador(valor + 1)
        }
        
    }

    const handleDecrementar = () => {
        if(valor > 1){
            setContador(valor - 1)
        }
    }
    return(
        <>
            <span>{valor}</span>
            <button onClick={handleIncrementar}>Sumar uno</button>
            <button onClick={handleDecrementar}>Restar uno</button>
        </>
    )
}