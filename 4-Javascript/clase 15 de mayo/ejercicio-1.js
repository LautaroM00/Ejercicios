/*
Solicitar al usuario un numero 3 veces, mostrar al final de las solicitudes un alerta que muestre la sumatoria de los 3 numeros
dime un numero> 3
dime un numero> 4
dime un numero> 3
>>alert> 10
*/

let suma = 0

for (let i = 1; i <= 3 ; i++){

    let numero = prompt('Dime un número', '')

    while(!numero || isNaN(numero)){
        alert('Error: No ingresó un número')

        numero = prompt('Dime un número', '')
    }

    numero = Number(numero)

    suma = suma + numero
}

alert(suma)