/*
30)Definí una función esVocal que tome por parámetro un string letra y nos indique si letra es una vocal.
datos con los cuales deben ser enviados a la función:
esVocal('a')
true
    esVocal('n')
false
    esVocal('e')
true
*/

function esVocal(letra){
    return console.log(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u')
}

esVocal('a')

esVocal('n')

esVocal('e')