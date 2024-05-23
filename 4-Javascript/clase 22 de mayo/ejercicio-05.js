/*
Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje:
Ingresá la distancia del recorrido
Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje: Para la distancia {distancia} km en bicicleta el tiempo de viaje es {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} hora/s
Las velocidades de los medio de transporte son:
a pie : 5 km/ hs
bicicleta : 10 km/ hs
auto : 50 km/hs
*/

let distancia = prompt('Ingrese la distancia del recorrido (en kilómetros):' ,'')

while(!distancia || isNaN(distancia) || distancia < 0){
    alert('Error: Solo se aceptan valores numéricos positivos')

    distancia = prompt('Ingrese la distancia del recorrido (en kilómetros):' ,'')
}

function enCuantoRecorre(distancia){
    let tiempoAPie = distancia / 5

    let tiempoEnBici = distancia / 10

    let tiempoEnAuto = distancia / 50

    return console.log('Para la distancia ' + distancia + 'km en bicicleta el tiempo de viaje es ' + tiempoEnBici + ' hora/s, a pie ' + tiempoAPie + ' hora/s y en auto ' + tiempoEnAuto + ' hora/s.')
}

enCuantoRecorre(distancia)