const historial = [
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2 
    },
]

function renderizarHistorial(historialRecibido){
    let textoHistorial = 'El historial es:'

    for (let calculo of historialRecibido){
        textoHistorial = textoHistorial + '\n'
        for(let propiedad in calculo){
            textoHistorial = textoHistorial + '\n' + `${propiedad}: ${calculo[propiedad]}`
        }
    }

    return textoHistorial
}

function agregarAlHistorial (elementoHistorial){
    historial.push(elementoHistorial)

    let objetoString = JSON.stringify(historial)

    localStorage.setItem('historial', objetoString)
}

function obtenerHistorial(){
    let objetoString = localStorage.getItem('historial')

    return JSON.parse(objetoString)
}

agregarAlHistorial({
    accion: 'CALCULAR',
    operacion: '-',
    a: 1,
    b: 2,
    resultado: -1
})

alert(renderizarHistorial(historial))