const productos = [
    {
        nombre: 'tv samsung',
        marca: 'samsung',
        id: 1,
        precio: 3000
    },
    {
        nombre: 'celular samsung',
        marca: 'samsung',
        id: 4,
        precio: 1100
    },
    {
        nombre: 'tv LG',
        marca: 'LG',
        id: 2,  
        precio: 2900
    },  
    {
        nombre: 'tv noblex',
        marca: 'noblex',   
        id: 3,  
        precio: 2300
    },
]

/* 
-Traer los productos que sean de precio inferior a 2950
-Traer los productos de la marca noblex
-Traer los productos que en su nombre incluyan el string 'tv'
*/

const productoPrecioInferior = productos.filter(function(producto){
    return producto.precio < 2950
})
console.log(productoPrecioInferior)


const productoNoblex = productos.filter(function(producto){
    return producto.nombre.toLowerCase().includes('noblex')
})
console.log(productoNoblex)


const productoTV = productos.filter(function(producto){
    return producto.nombre.toLowerCase().includes('tv')
})
console.log(productoTV)