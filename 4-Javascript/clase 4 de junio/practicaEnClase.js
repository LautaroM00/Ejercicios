const historial = [
    {
        id: '001',
        nombre: 'tv samsung',
        fecha: '17/09/2020'
    },
    {
        id: '022',
        nombre: 'Macbook',
        fecha: '14/10/2020'
    },
    {
        id: '030',
        nombre: 'Celular motorola',
        fecha: '17/09/2021'
    },
    {
        id: '301',
        nombre: 'Zapatillas nike',
        fecha: '30/09/2023'
    }
]

let contenedorProductosHTML = document.getElementById('elemento')

let listaProductos = ''

for(let producto of historial){
    listaProductos = listaProductos + `
    <span><b>${producto.id}</b></span>
    <h3>${producto.nombre}</h3>
    <span>${producto.fecha}</span>
    <br>
    <hr>`
}

contenedorProductosHTML.innerHTML = listaProductos


/* Renderizar el historial, cada elemento de historial debe seguir la sig estructura:

<div>
    <span><b>ID: #003</b></span>
    <h3>Tv samsung</h3>
    <span>Fecha: 14/05/2023</span>
    <br>
    <hr>
</div>
*/