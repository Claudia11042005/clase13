function saludo(){
    console.log ("WELCOME")
}

saludo();

function resultado(){
    alert (5+3);
    alert ("La suma de los dos numeros es" + ( 5+3))
}

function salida2b(){
    let element=document.getElementById("salida2b");
    element.innerHTML="La suma es "+(5+3);
}

function salida3(){
    let nombre=prompt("por favor ingrese su nombre "); 
    alert("saludo "+ nombre);

}

function salida4() {
    let variable = 42; 
    console.log(variable); 
}


function salida5() {
    let fechaActual = new Date();
    alert("La fecha actual es: " + fechaActual);
}




function salida6() {
    document.write("Hola, Mundo");
}


