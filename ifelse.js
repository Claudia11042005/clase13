// Ejercicio 1: Verificar si hace frío o calor
function verificarTemperatura() {
    const temperatura = document.getElementById('temperatura').value;

    if (temperatura < 20) {
        alert("Hace frío.");
    } else {
        alert("Hace calor.");
    }
}

// Ejercicio 2: Verificar si es menor o mayor de edad
function verificarEdad() {
    const edad = document.getElementById('edad').value;

    if (edad >= 18) {
        alert("Eres mayor de edad.");
    } else {
        alert("Eres menor de edad.");
    }
}

// Ejercicio 3: Verificar si un número es par o impar
function verificarParidad() {
    const numero = document.getElementById('numero1').value;

    if (numero % 2 === 0) {
        alert("El número es par.");
    } else {
        alert("El número es impar.");
    }
}

// Ejercicio 4: Verificar si has aprobado o no
function verificarCalificacion() {
    const calificacion = document.getElementById('calificacion').value;

    if (calificacion >= 60) {
        alert("Has aprobado.");
    } else {
        alert("Has reprobado.");
    }
}

// Ejercicio 5: Verificar si el número es positivo, negativo o cero
function verificarSigno() {
    const numero = document.getElementById('numero2').value;

    if (numero > 0) {
        alert("El número es positivo.");
    } else if (numero < 0) {
        alert("El número es negativo.");
    } else {
        alert("El número es cero.");
    }
}
