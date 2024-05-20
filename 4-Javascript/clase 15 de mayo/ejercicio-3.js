/*
calcularMinutos(horas) => cantidad de minutos
calcularMinutos(1) => 60
obtenerNumero()
Va a solicitar al usuario un numero y va a validar que el dato ingresado sea un numero
Sino debera volver a solicitarlo
Cuando termine de validar se retornara el numero
*/

let horas = prompt('Ingrese cantidad de horas', '')

while(!horas || isNaN(horas) || horas < 0){
    alert('ERROR: ingresó un dato inválido')

    horas = prompt('Ingrese cantidad de horas', '')
}


function calcularMinutos(horas){

    return horas * 60
}

alert(horas + ' hora/s equivalen a ' + calcularMinutos(horas) + ' minutos.')