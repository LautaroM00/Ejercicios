function validarOperador(){
    return (operacion !== '+' && operacion !== '-')
}

let primerNumero = prompt('Ingrese el primer número', '')

function validarNumero() {
    return (isNaN(numero) || !numero)
}


let segundoNumero = prompt('Ingrese el segundo número', '')

while(isNaN(segundoNumero) || !segundoNumero){
    alert('ERROR: Se ingresó un valor no numérico')

    segundoNumero = prompt('Ingrese el segundo número', '')
}

primerNumero = Number(primerNumero)

segundoNumero = Number(segundoNumero)

alert('El resultado de ' + primerNumero + ' ' + operacion + ' ' + segundoNumero + ' es: ' + resultado)

const OPERADOR = {
    mensaje: 'Ingrese una operación:\n-Para suma ingrese: +\n-Para resta ingrese: -',
    validar: validarOperador,
    error: 'ERROR: Se ingresó un valor no numérico',
}

const NUMERO = {
    mensaje: 'Ingrese un número',
    validar: validarNumero,
}

function operarNumeros(dato){

    let numero = prompt(dato.mensaje)

    while(dato.validar){
        alert(dato.error)

        dato = prompt(dato.mensaje)
    }
}