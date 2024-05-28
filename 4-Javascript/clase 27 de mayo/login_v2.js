const DATOS_USUARIO = {
}

const VALIDACION = {
    email: {
        mensaje: 'Ingrese su email:',
        error: 'ERROR: No se ingresó un email válido, reintente.',
        funcion: validarEmail
    },
    password: {
        mensaje: 'Ingrese una contraseña respetando las siguientes condiciones: \n-Minimo una letra en mayúscula.\n-Mínimo 6 caracteres.',
        error: 'ERROR: La contraseña no respeta las condiciones dadas.',
        funcion: validarContraseña
    }
}

function validarEmail(){
    return (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(DATOS_USUARIO.email)))
}

function validarContraseña(){
    return (DATOS_USUARIO.password === DATOS_USUARIO.password.toLowerCase() || DATOS_USUARIO.password || DATOS_USUARIO.password.length < 6)
}

function login(){

    DATOS_USUARIO.email = prompt(VALIDACION.email.mensaje)
    while(VALIDACION.email.funcion()){
        alert(VALIDACION.email.error)
        DATOS_USUARIO.email = prompt(VALIDACION.email.mensaje)
    }
    alert('Email registrado: ' + DATOS_USUARIO.email)


    DATOS_USUARIO.password = prompt(VALIDACION.password.mensaje)
    while(VALIDACION.password.funcion()){
        alert(VALIDACION.password.error)
        DATOS_USUARIO.password = prompt(VALIDACION.password.mensaje)
    }

    alert('Password registrado.')
}

login()

console.log(DATOS_USUARIO)