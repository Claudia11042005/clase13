function verificarCalificacion() {
    const calificacion = parseFloat(document.getElementById("calificacion").value);
    document.getElementById("resultadoCalificacion").textContent = 
        calificacion >= 60 ? "¡Aprobado!" : "No aprobado.";
}

function verificarNumero() {
    const numero = parseFloat(document.getElementById("numero").value);
    let mensaje;
    if (numero > 0) {
        mensaje = "El número es positivo.";
    } else if (numero < 0) {
        mensaje = "El número es negativo.";
    } else {
        mensaje = "El número es cero.";
    }
    document.getElementById("resultadoNumero").textContent = mensaje;
}

function verificarDia() {
    const dia = parseInt(document.getElementById("dia").value);
    let mensaje;

    switch (dia) {
        case 1:
            mensaje = "Lunes";
            break;
        case 2:
            mensaje = "Martes";
            break;
        case 3:
            mensaje = "Miércoles";
            break;
        case 4:
            mensaje = "Jueves";
            break;
        case 5:
            mensaje = "Viernes";
            break;
        case 6:
            mensaje = "Sábado";
            break;
        case 7:
            mensaje = "Domingo";
            break;
        default:
            mensaje = "Número inválido. Debe estar entre 1 y 7.";
    }
    document.getElementById("resultadoDia").textContent = mensaje;
}

function determinarMayor() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const mayor = (num1 > num2) ? `El número mayor es: ${num1}` : `El número mayor es: ${num2}`;
    document.getElementById("resultadoMayor").textContent = mayor;
}

function verificarEdad() {
    const edad = parseInt(document.getElementById("edad").value);
    const mensaje = (edad >= 18) ? "Eres mayor de edad." : "Eres menor de edad.";
    document.getElementById("resultadoEdad").textContent = mensaje;
}

function verificarDivisibilidad() {
    const numeroDivisible = parseInt(document.getElementById("numeroDivisible").value);
    let resultado;

    switch (true) {
        case (numeroDivisible % 3 === 0 && numeroDivisible % 5 === 0):
            resultado = "El número es divisible por 3 y 5.";
            break;
        case (numeroDivisible % 3 === 0):
            resultado = "El número es divisible por 3.";
            break;
        case (numeroDivisible % 5 === 0):
            resultado = "El número es divisible por 5.";
            break;
        default:
            resultado = "El número no es divisible por 3 ni por 5.";
    }

    document.getElementById("resultadoDivisible").textContent = resultado;
}
