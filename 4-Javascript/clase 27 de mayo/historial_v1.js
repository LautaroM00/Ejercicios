const HISTORIAL = [
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

function renderizarHistorial(){
    let textoHistorial = 'El historial es:'

    for (let calculo of HISTORIAL){
        textoHistorial = textoHistorial + '\n'
        for(let propiedad in calculo){
            textoHistorial = textoHistorial + '\n' + `${propiedad}: ${calculo[propiedad]}`
        }
    }

    return textoHistorial
}

alert(renderizarHistorial())