// Uso de variables 

function Datos1() {
    let nombre = prompt("Ingrese su nombre");
    let edad = prompt("Ingrese su edad");
    let ciudad = prompt("Ingrese su ciudad");
    console.log("Nombre:", nombre, "Edad:", edad, "Ciudad:", ciudad);
}


function mostrarvalor() {
    let pi = 3.1416;
    console.log("Valor de Pi:", pi);
}


function numf() {
    let numero = 7;
    let texto = "es mi número favorito";
    console.log(numero + " " + texto);
}



function multiplicacion() {
    let numero1 = Number(prompt("Ingrese un número"));
    let numero2 = Number(prompt("Ingrese otro número"));
    let resultado = numero1 * numero2;
    console.log("El resultado de la multiplicación es:", resultado);
}



function pedirEdad() {
    let edad = prompt("¿Cuál es tu edad?");
    console.log("Tienes " + edad + " años");
}


function nombrecompleto() {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    console.log("Su nombre completo es :", nombre + " " + apellido);
}
