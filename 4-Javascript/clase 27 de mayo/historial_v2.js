// a diferencia de historial_v1 este cuenta con la aplicación de lo referido al almacenamiento en localStorage

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

function guardarEnHistorial(calculo){
    let historialLocal = obtenerHistorial()

    historialLocal.push(calculo)
    historialLocal = JSON.stringify(historialLocal)

    localStorage.setItem('historial', historialLocal)
}

function obtenerHistorial(){
    let historialLocal = JSON.parse(localStorage.getItem('historial'))

    if (historialLocal === null){
        localStorage.setItem('historial', '[]')
        historialLocal = localStorage.getItem('historial')
        return historialLocal
    }else{
        return historialLocal
    }
    //La función SIEMPRE devolverá un string porque el LocalStorage solo admite este tipo de dato
}

console.log(localStorage.getItem('historial'))