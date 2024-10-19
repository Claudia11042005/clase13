function mostrarNumerosFor() {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += i + ' ';
    }
    document.getElementById('resultado1').innerText = resultado;
}

function sumarNumerosWhile() {
    let suma = 0;
    let i = 1;
    while (i <= 100) {
        suma += i;
        i++;
    }
    document.getElementById('resultado2').innerText = 'La suma es: ' + suma;
}

function mostrarTablaMultiplicar() {
    let numero = parseInt(document.getElementById('numeroTabla').value);
    let resultado = '';
    if (isNaN(numero)) {
        resultado = 'Introduce un número válido';
    } else {
        for (let i = 1; i <= 10; i++) {
            resultado += numero + ' x ' + i + ' = ' + (numero * i) + '\n';
        }
    }
    document.getElementById('resultado3').innerText = resultado;
}

function mostrarNumerosPares() {
    let resultado = '';
    let i = 1;
    let contador = 0;
    while (contador < 10) {
        if (i % 2 === 0) {
            resultado += i + ' ';
            contador++;
        }
        i++;
    }
    document.getElementById('resultado4').innerText = resultado;
}

function pedirNumeros() {
    let numero;
    let resultado = '';
    do {
        numero = parseInt(prompt('Introduce un número (negativo para salir):'));
        if (!isNaN(numero) && numero >= 0) {
            resultado += numero + ' ';
        }
    } while (numero >= 0);
    document.getElementById('resultado5').innerText = 'Números ingresados: ' + resultado;
}

function contarLetrasA() {
    let palabra = document.getElementById('palabra').value;
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    document.getElementById('resultado6').innerText = 'La letra "a" aparece ' + contador + ' veces.';
}
