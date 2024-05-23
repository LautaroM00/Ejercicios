
const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: 40
    },
    {
        nombre: 'maria',
        apellido: 'cassanova',
        edad: 20
    },
    {
        nombre: 'ezequiel',
        apellido: 'rodrigez',
        edad: 35
    },
]

/* 
Por cada personaje mostrar el siguente mensaje por consola
'Hola mi nombre es {personaje.nombre} {personaje.apellido} y tengo {personaje.edad} años'
Opcional:
Al finalizar el recorrido mostar por consola 'total de edades: {sumatoria de las edades de los usuarios}'
*/

/* let sumatoriaEdades = 0

for(let i = 0; i < personajes.length; i++){

    let nombre = personajes[i].nombre

    let apellido =  personajes[i].apellido

    let edad =  personajes[i].edad

    console.log('Hola mi nombre es ' + nombre + ' ' + apellido + ' y tengo ' + edad + ' años')

    sumatoriaEdades = sumatoriaEdades + edad
}

console.log('Total de edades: ' + sumatoriaEdades)
 */

let sumatoriaEdades = 0

for (let personaje of personajes){
    console.log('Hola mi nombre es ' + personaje.nombre + ' ' + personaje.apellido + ' y tengo ' + personaje.edad + ' años')

    sumatoriaEdades = sumatoriaEdades + personaje.edad
}

console.log('Total de edades: ' + sumatoriaEdades)
