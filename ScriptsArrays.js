const numeros = [10, 20, 30, 40, 50];

function mostrarPrimerUltimo() {
    console.log('Primer elemento: ' + numeros[0]);
    console.log('Último elemento: ' + numeros[numeros.length - 1]);
}

const ciudades = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Granada'];

function mostrarSegundaCiudad() {
    console.log('La segunda ciudad es: ' + ciudades[1]);
}

function sumarNumeros() {
    let numerosUsuario = [];
    let suma = 0;
    for (let i = 0; i < 5; i++) {
        let num = parseFloat(prompt('Introduce un número (' + (i + 1) + '/5):'));
        numerosUsuario.push(num);
        suma += num;
    }
    console.log('La suma de los números es: ' + suma);
}

const palabras = ['sol', 'luna', 'estrella', 'mar', 'cielo'];

function mostrarPalabras() {
    palabras.forEach(palabra => {
        console.log(palabra);
    });
}

function almacenarNombres() {
    let nombres = [];
    for (let i = 0; i < 5; i++) {
        let nombre = prompt('Introduce un nombre (' + (i + 1) + '/5):');
        nombres.push(nombre);
    }
    document.getElementById('resultadoNombres').innerText = 'Nombres ingresados: ' + nombres.join(', ');
}

function contarMayores50() {
    let contador = 0;
    for (let i = 0; i < 10; i++) {
        let numero = parseFloat(prompt('Introduce un número (' + (i + 1) + '/10):'));
        if (numero > 50) {
            contador++;
        }
    }
    document.getElementById('resultadoMayores50').innerText = 'Números mayores a 50: ' + contador;
}
