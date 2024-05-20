/* 
Solicitar al usuario la cantidad de personas en la clase (numero)
Dependiendo de la cantidad de alumnos de la clase van a solicitar a cada uno el nombre
(
    Si la cantidad de personas de clase es 5, van solicitar 5 nombre
)
Luego de solicitar los nombres mostrarlos en este formato:
'
Lista de alumnos:
-juan
-pepe
-maria
-carla
-julieta
' 
*/

let listaAlumnos = 'Lista de alumnos: '

let cantidadPersonas = prompt('Ingrese la cantidad de personas en la clase:', '')

while(!cantidadPersonas || isNaN(cantidadPersonas) || cantidadPersonas < 0){
    alert('Error: No ingresó un valor numérico válido')
    cantidadPersonas = prompt('Ingrese la cantidad de personas en la clase:', '')
}

for(let i = 1; i <= cantidadPersonas; i++){

    let nombreAlumno = prompt('Ingrese el nombre n°' + i, '')

    while(!nombreAlumno || !isNaN(nombreAlumno)){
        alert('Error: No ingresó un nombre válido')
        nombreAlumno = prompt('Ingrese el nombre n°' + i, '')
    }


    listaAlumnos = listaAlumnos + '\n-' + nombreAlumno

}

if(cantidadPersonas == 0){
    alert('No hay personas en la clase')
}else {
    alert(listaAlumnos)
}
