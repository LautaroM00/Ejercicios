const VALIDAR = {
    numero: {
        mensaje: 'Ingrese un número',
        error: 'ERROR: No ingresó un número',
        funcion: function validarNumero(numero){
            return (!numero || isNaN(numero))
        }
    },

    operador: {
        mensaje: `¿Qué operación desea realizar?
        - Para suma, ingrese '+'
        - Para resta, ingrese '-'`,
        error: 'ERROR: Ingresó un operador no soportado',
        }
}

const CALCULO_USUARIO = {
}

function calculadora(){

    operador = prompt(VALIDAR.operador.mensaje)
    while (!(operador === '+' || operador === '-')){
        alert(VALIDAR.operador.error)
        operador = prompt(VALIDAR.operador.mensaje)
    }

    numero1 = prompt(VALIDAR.numero.mensaje)
    while(VALIDAR.numero.funcion(numero1)){
        alert(VALIDAR.numero.error)
        numero1 = prompt(VALIDAR.numero.mensaje)
    }

    numero2 = prompt(VALIDAR.numero.mensaje)
    while(VALIDAR.numero.funcion(numero2)){
        alert(VALIDAR.numero.error)
        numero2 = prompt(VALIDAR.numero.mensaje)
    }

    if(operador === '+'){
        return alert(`El resultado de ${numero1} ${operador} ${numero2} es: ${Number(numero1) + Number(numero2)}`)
    }else{
        return alert(`El resultado de ${numero1} ${operador} ${numero2} es: ${Number(numero1) - Number(numero2)}`)
    }
}

calculadora()