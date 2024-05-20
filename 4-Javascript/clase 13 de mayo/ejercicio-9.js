let numero = prompt('Ingrese un número', '')

while(numero === null || isNaN(numero)){
    alert('ERROR: Ingrese un número')
    numero = prompt('Ingrese un número', '')
}

if(numero > 0){
    alert('El número es positivo')
}else if(numero < 0){
    alert('El número es negativo')
}else if(numero === 0){
    alert('El número es igual a 0')
}