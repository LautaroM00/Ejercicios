import React from "react";
import { useState } from "react";

const URL_API = 'https://jsonplaceholder.typicode.com'

const obtenerUsuarios = async () =>{
    const response = await fetch(URL_API + '/users',{
        method: 'GET',
    })

    const usuarios = await response.json()

    return usuarios
}

const infoUsuarios = await obtenerUsuarios()

const App = () => {
            const datos = infoUsuarios.map(usuario =>
                <div key={usuario.id}>
                    <h1>{usuario.name}</h1>
                    <ul>
                        <li>
                            {usuario.email}
                        </li>
                        <li>
                            {usuario.phone}
                        </li>
                        <li>
                            {usuario.website}
                        </li>
                    </ul>
                </div>
            )
            return(
                <>
                    <div>
                        {datos}
                    </div>
                </>
            )

}

const App2 = () => {

    const [index , setIndex] = useState(0)

    const adelante = () => {
        if(!infoUsuarios[index]){
            
        }else{
            setIndex(index + 1)
        }
    }

    const atras = () => {
        if(!infoUsuarios[index]){
            
        }else{
            setIndex(index - 1)
        }
    }

    const data = infoUsuarios

    return(
        <>
            <h1>{data[index].name}</h1>
            <ul>
                <li>{data[index].email}</li>
                <li>{data[index].phone}</li>
                <li>{data[index].website}</li>
            </ul>
            <button onClick={adelante}>Adelante</button>
            <button onClick={atras}>Atras</button>
        </>
    )
}










export default App2