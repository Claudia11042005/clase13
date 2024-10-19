// suma 
function suma1() {
    let numero1 = Number(prompt("Ingrese un número"));
    let numero2 = Number(prompt("Ingrese otro número"));
    let resultado = numero1 + numero2;
    console.log("El resultado de la suma es:", resultado);
}



// saludo en la consola
function saludar() {
    let nombre = prompt("Ingrese su nombre"); 
    console.log(`¡Hola, ${nombre}!`);
}



//  área de un círculo



// area del circulo 
 function areairculo (radio){
    let diametro = parseFloat(prompt("Ingrese el diámetro"));
    let element = document.getElementById("resultado1");

    let area; 
    area=Math.PI*Math.pow(radio,2); 
    
    return area 
 }

// el mayor de dos números
function comparacion() {
    let num1 = parseFloat(prompt("Ingrese el primer número"));
    let num2 = parseFloat(prompt("Ingrese el segundo número"));
    let element = document.getElementById("resultado2");

    element.innerText = `El mayor de los dos números es: ${num1 > num2 ? num1 : num2}`;
}


function esPar() {
    let num = parseInt(prompt("Ingrese un número"));
    let element = document.getElementById("resultado3");

    element.innerText = !isNaN(num) && num % 2 === 0; // true si es par, false si es impar
}



// 6. Función para calcular el promedio de un array de números
function calcularPromedio() {
    let input = prompt("Ingrese números separados por comas");
    let numeros = input.split(',').map(Number);
    let suma = numeros.reduce((acc, num) => acc + num, 0);
    let promedio = suma / numeros.length;
    document.getElementById('resultado5').innerText = "El promedio es:"+ promedio.toFixed(2);
}