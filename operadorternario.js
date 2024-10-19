// 1. Verificar si es mayor o menor de edad
function verificarEdad() {
    let edad = parseInt(document.getElementById('edad').value);
    let mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
    alert(mensaje);
}

// 2. Verificar si el número es par o impar
function verificarParImpar() {
    let numero = parseInt(document.getElementById('numero').value);
    let mensaje = (numero % 2 === 0) ? "Par" : "Impar";
    alert(mensaje);
}

// 3. Verificar cuál número es mayor
function verificarMayor() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let mensaje = (num1 > num2) ? `${num1} es mayor` : `${num2} es mayor`;
    alert(mensaje);
}

// 4. Verificar si hace calor o frío
function verificarTemperatura() {
    let temperatura = parseInt(document.getElementById('temperatura').value);
    let mensaje = (temperatura >= 20) ? "Calor" : "Frío";
    alert(mensaje);
}

// 5. Verificar si puede votar
function verificarVoto() {
    let nacimiento = parseInt(document.getElementById('nacimiento').value);
    let edad = new Date().getFullYear() - nacimiento;
    let mensaje = (edad >= 18) ? "Puede votar" : "No puede votar";
    alert(mensaje);
}
