// 1. Mostrar día de la semana
function mostrarDia() {
    let dia = parseInt(document.getElementById('dia').value);
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
            mensaje = "Número inválido";
    }
    alert(mensaje);
}

// 2. Mostrar calificación
function mostrarCalificacion() {
    let letra = document.getElementById('letra').value.toUpperCase();
    let mensaje;
    switch (letra) {
        case 'A':
            mensaje = "Excelente";
            break;
        case 'B':
            mensaje = "Bien";
            break;
        case 'C':
            mensaje = "Regular";
            break;
        default:
            mensaje = "Calificación inválida";
    }
    alert(mensaje);
}

// 3. Mostrar mes del año
function mostrarMes() {
    let mes = parseInt(document.getElementById('mes').value);
    let mensaje;
    switch (mes) {
        case 1:
            mensaje = "Enero";
            break;
        case 2:
            mensaje = "Febrero";
            break;
        case 3:
            mensaje = "Marzo";
            break;
        case 4:
            mensaje = "Abril";
            break;
        case 5:
            mensaje = "Mayo";
            break;
        case 6:
            mensaje = "Junio";
            break;
        case 7:
            mensaje = "Julio";
            break;
        case 8:
            mensaje = "Agosto";
            break;
        case 9:
            mensaje = "Septiembre";
            break;
        case 10:
            mensaje = "Octubre";
            break;
        case 11:
            mensaje = "Noviembre";
            break;
        case 12:
            mensaje = "Diciembre";
            break;
        default:
            mensaje = "Número inválido";
    }
    alert(mensaje);
}

// 4. Mostrar si es par o impar
function mostrarParImpar() {
    let numero = parseInt(document.getElementById('numero').value);
    let mensaje;
    switch (numero % 2) {
        case 0:
            mensaje = "Par";
            break;
        case 1:
            mensaje = "Impar";
            break;
        default:
            mensaje = "Número inválido";
    }
    alert(mensaje);
}

// 5. Mostrar mensaje del semáforo
function mostrarSemaforo() {
    let color = document.getElementById('semaforo').value.toLowerCase();
    let mensaje;
    switch (color) {
        case "verde":
            mensaje = "Puedes avanzar";
            break;
        case "amarillo":
            mensaje = "Precaución";
            break;
        case "rojo":
            mensaje = "Detente";
            break;
        default:
            mensaje = "Color inválido";
    }
    alert(mensaje);
}
