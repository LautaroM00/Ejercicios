/*
Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
datos con los cuales deben ser enviados a la función
puedeVerPelicula(12, false)
false
    puedeVerPelicula(12, true)
true
    puedeVerPelicula(16, false)
true
    puedeVerPelicula(18, true)
true
*/

function puedeVerPelicula(edad, autorizacion){
    if(autorizacion){
        return console.log(true)
    }
    else{
        if (edad > 14) return console.log(true)
    }

    return console.log(false)
}

puedeVerPelicula(18, true)

puedeVerPelicula(12, true)

puedeVerPelicula(16, false)

puedeVerPelicula(12, false)