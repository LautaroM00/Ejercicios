/*
Dado los siguientes texto
"hola%20como%20estas,%20todo%20bien?"
"no%20me%20siento%20bien"
"que%20mal"
descifrar el codigo y mostrarlo por consola: "El codigo descifrado es: " + codigoDescifrado
Averiguar la cantidad de caracteres y en base a el numero de caracteres mostrar
"el mensaje es corto" entre 1 y 8 caracteres
"el mensaje es mediano" entre 9 y 18
"el mensaje es largo"  mas de 18
Ademas si el mensaje cuenta con ",", "@", "-" debera decir, "el mensaje es complejo", sino decir
"el mensaje no es complejo"
*/



function descifrarTexto(texto){

    let textoFiltrado = texto.replaceAll('%20', ' ')

    return console.log('    El código descifrado es: ' + textoFiltrado)
}

function longitudTexto(texto){

    let textoFiltrado = texto.replaceAll('%20', ' ')

    if(textoFiltrado.length >= 1 && textoFiltrado.length <= 8){
        return console.log('    El mensaje es corto')

    }else if(textoFiltrado.length >= 9 && textoFiltrado.length <= 18){
        return console.log('    El mensaje es mediano')
    }

    return console.log('    El mensaje es largo')
}

function complejidadDeMensaje(texto){

    let textoFiltrado = texto.replaceAll('%20', ' ')

    if(textoFiltrado.includes(',' || ', ' || '@' || '-')){
        return console.log('    El mensaje es complejo')
    }

    return console.log('    El mensaje no es complejo')
}

console.log('Primer mensaje:')

descifrarTexto("hola%20como%20estas,%20todo%20bien?")

longitudTexto("hola%20como%20estas,%20todo%20bien?")

complejidadDeMensaje("hola%20como%20estas,%20todo%20bien?")

console.log('\nSegundo mensaje:')

descifrarTexto("no%20me%20siento%20bien")

longitudTexto("no%20me%20siento%20bien")

complejidadDeMensaje("no%20me%20siento%20bien")

console.log('\nTercer mensaje:')

descifrarTexto("que%20mal")

longitudTexto("que%20mal")

complejidadDeMensaje("que%20mal")