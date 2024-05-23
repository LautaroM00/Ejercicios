/*
Solicitar al usuario un texto y verificar si se trata de una URL con certificado ssl,
Si cuenta con con https:// decir por consola "la url ingresada, cuenta con certificado ssl"
Si no lo tiene pero si tiene http:// "la url ingresada no cuenta con certificado ssl"
Si no posee ninguno decir "no has ingresado una url valida"
*/

let urlUsuario = prompt('Ingrese su URL ( https:// o http://)', '')

while(!urlUsuario){
    urlUsuario = prompt('Ingrese su URL ( https:// o http://)', '')
}

if(urlUsuario.toLowerCase().includes('https://')){

    console.log('La URL ingresada cuenta con certificado SSL')

}else if(urlUsuario.toLowerCase().includes('http://')){

    console.log('La URL ingresada no cuenta con certificado SSL')
    
}else{
    console.log('No has ingresado una URL válida')
}