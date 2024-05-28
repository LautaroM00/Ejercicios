function login(){

    let datosUsuario = {
        email: '',
        password: '',
    }

    let usuarioEmail = prompt('Ingrese su email:', '')
    
    while(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(usuarioEmail))){
        alert('ERROR: No se ingresó un email válido, reintente.')
        
        usuarioEmail = prompt('Ingrese su email:', '')
}
    datosUsuario.email = usuarioEmail

    alert('Email registrado: ' + usuarioEmail)

    let usuarioPassword = prompt('Ingrese una contraseña respetando las siguientes condiciones: \n-Minimo una letra en mayúscula.\n-Mínimo 6 caracteres.', '')

    let longitudContraseña = usuarioPassword.length

    let validacionMayusculas = usuarioPassword.toLowerCase()

    while(validacionMayusculas === usuarioPassword || !usuarioPassword || longitudContraseña < 6){
        alert('ERROR: La contraseña no respeta las condiciones dadas.')

        usuarioPassword = prompt('Ingrese una contraseña respetando las siguientes condiciones: \n-Minimo una letra en mayúscula.\n-Mínimo 6 caracteres.', '')
    }

    datosUsuario.password = usuarioPassword

    alert('Password registrado.')

    return datosUsuario
}

console.log(login())