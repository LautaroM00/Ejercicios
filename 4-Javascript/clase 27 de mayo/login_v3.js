const DATOS_USUARIO = {
}

const VALIDACION = {
    email: {
        mensaje: 'Ingrese su email:',
        error: 'ERROR: No se ingresó un email válido, reintente.',
        registrado: 'Email registrado: ',
        funcion: function validarEmail(){
            return (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(DATOS_USUARIO.email)))
        }
    },
    password: {
        mensaje: 'Ingrese una contraseña respetando las siguientes condiciones: \n-Minimo una letra en mayúscula.\n-Mínimo 6 caracteres.',
        error: 'ERROR: La contraseña no respeta las condiciones dadas.',
        registrado: 'Password registrado',
        funcion: function validarContraseña(){
            return (DATOS_USUARIO.password === String(DATOS_USUARIO.password).toLowerCase() || DATOS_USUARIO.password === null || String(DATOS_USUARIO.password).length < 6)
        },
    }
}

function login(dato){

    DATOS_USUARIO[dato] = prompt(VALIDACION[dato].mensaje)

    while(VALIDACION[dato].funcion()){
        alert(VALIDACION[dato].error)
        DATOS_USUARIO[dato] = prompt(VALIDACION[dato].mensaje)
    }

    alert(`${dato} registrado: ${DATOS_USUARIO[dato]}`)
}

login('email')

login('password')