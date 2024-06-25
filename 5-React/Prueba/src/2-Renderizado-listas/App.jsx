import React from "react";


const products = [
    { title: 'Col', isFruit: false, id: 1 },
    { title: 'Ajo', isFruit: false, id: 2 },
    { title: 'Manzana', isFruit: true, id: 3 },
    { title: 'Naranja', isFruit: true, id: 4 },

];


const listaProductos = products.map((product) => {
    return(
        <li 
        key={product.id}
        style={{
            color: product.isFruit ? 'red' : 'blue'
            }}>
            {product.title}
        </li>
    )
})


/* El background color tira warning */




const App = () => {
    return(
        <ul>
            {listaProductos}
        </ul>
    )
}
















export default App