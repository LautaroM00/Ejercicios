/*
Solicitar al usuario una palabra y decir en consola "tiene mayuscula" en el caso de que tenga
una maysucula, sino decir "tiene minuscula"
*/

let oracion = prompt('Ingrese oración a ser evaluada.', '')

function tieneMayusculas(oracion){
    for(let i = 0; i < oracion.length; i++){
        if (oracion[i].charCodeAt() <= 90 && oracion[i].charCodeAt() >= 65)
            return console.log('Tiene mayúsculas')
    }
    return console.log('Tiene minúscula')
}

tieneMayusculas(oracion)