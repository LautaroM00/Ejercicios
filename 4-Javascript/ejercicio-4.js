/*
16.De un empleado se sabe su sueldo y los años de antigüedad. el sector de contabilidad nos pide hacer un programa que lea los datos y nos muestre.
1)  Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
2)  Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %.
3)  Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios.
*/






//Variante sin corregir:

/* let sueldo = +prompt('Ingrese el sueldo', '')

let antiguedad = +prompt('Ingrese la antiguedad (en años)', '') //el prompt convierte el valor ingresado a string

if(sueldo < 500 && antiguedad >= 10) 
    {
        alert(sueldo += sueldo*0.2)
    }
else{
    if (sueldo < 500 && antiguedad < 10) alert(sueldo += sueldo*0.05) 
    else (alert(`Sueldo:${sueldo}`))
} */

/* Se pueden combinar las dos comparaciones de salario en una misma y haciendo la 2da validación con años de antiguedad */






//La variante corregida queda:

let sueldo = +prompt('Ingrese el sueldo', '')

let antiguedad = +prompt('Ingrese la antiguedad (en años)', '') //el prompt convierte el valor ingresado a string

if(sueldo < 500)
    {
        if (antiguedad < 10) alert(sueldo += sueldo*0.05) 
        else alert(sueldo += sueldo*0.2)
    }
else (alert(`Sueldo: ${sueldo} ARS`))
