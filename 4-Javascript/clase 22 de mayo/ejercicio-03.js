/*
solicitar al usuario un mensaje, y cifrarlo con %20 en los espacios. Una vez cifrado decifrarlo
con el algoritmo anterior.
*/

let mensajeUsuario = prompt('Ingrese su mensaje a cifrar.', '')

function cifrarYdescifrar(mensajeUsuario){
    let mensajeCifrado = mensajeUsuario.replaceAll(' ', '%20')

    return console.log('El mensaje cifrado es: \n   ' + mensajeCifrado + '\nEl mensaje descifrado es:\n   ' + descifrarMensaje(mensajeCifrado))
}

function descifrarMensaje(mensajeCifrado){

    let mensajeDescifrado = mensajeCifrado.replaceAll('%20', ' ')

    return mensajeDescifrado
}

cifrarYdescifrar(mensajeUsuario)

