const formulario = document.getElementById('formulario')

const errorUsername = document.getElementById('mensaje-error-username')

const errorPassword = document.getElementById('mensaje-error-password')

const errorEmail = document.getElementById('mensaje-error-email')

const Funciones = {
    validarMayuscula: (texto) =>{

        let textoMinuscula = texto.toLowerCase()

        return textoMinuscula === texto
    }
    ,
    validarGuion: (texto) => !(texto.includes('-'))
    ,
    validarLongitud:(texto) => texto.length < 4
    ,
    validarHashtag: (texto) => !(texto.includes('#'))
    ,
    validarEmail: (email) => !(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))
}

formulario.addEventListener('submit', (evento)=>{

    evento.preventDefault()

    const nombreUsuario = evento.target.username.value

    const password = evento.target.password.value

    const email = evento.target.email.value

    if(Funciones.validarMayuscula(nombreUsuario) || Funciones.validarGuion(nombreUsuario) || Funciones.validarLongitud(nombreUsuario)){
        errorUsername.innerText = 'Error: username debe incluir una mayúscula, un guión y al menos 4 caracteres'
    }

    if(Funciones.validarMayuscula(password) || Funciones.validarHashtag(password)){
        errorPassword.innerText = 'Error: password debe incluir una mayúscula y un numeral'
    }

    if(Funciones.validarEmail(email)){
        errorEmail.innerHTML = 'Error: no ingresó un email válido'
    }

})
