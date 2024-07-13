const traerProductos = async () => {
    const response = await fetch('/data.json', {method: 'get'})

    const datos = await response.json()

    return datos
}


export { traerProductos }
