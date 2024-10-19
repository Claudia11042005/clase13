const persona = {
    nombre: 'Juan',
    edad: 25,
    ciudad: 'Madrid'
};

function mostrarPersona() {
    console.log('Nombre: ' + persona.nombre);
    console.log('Edad: ' + persona.edad);
    console.log('Ciudad: ' + persona.ciudad);
}

const coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2020,
    descripcion: function() {
        console.log('Coche: ' + this.marca + ' ' + this.modelo + ', Año: ' + this.año);
    }
};

function mostrarCoche() {
    coche.descripcion();
}

const rectangulo = {
    ancho: 10,
    alto: 5,
    calcularArea: function() {
        return this.ancho * this.alto;
    }
};

function calcularAreaRectangulo() {
    const area = rectangulo.calcularArea();
    document.getElementById('resultadoArea').innerText = 'Área del rectángulo: ' + area;
}

const libro = {
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    año: 1967,
    descripcion: function() {
        console.log('Libro: ' + this.titulo + ' por ' + this.autor + ', Año: ' + this.año);
    }
};

function mostrarLibro() {
    libro.descripcion();
}

const usuario = {
    nombre: 'Carlos',
    contraseña: '123456',
    verificarContraseña: function() {
        if (this.contraseña === '123456') {
            console.log('Contraseña correcta');
        } else {
            console.log('Contraseña incorrecta');
        }
    }
};

function verificarContraseña() {
    usuario.verificarContraseña();
}

const gato = {
    nombre: 'Michi',
    edad: 3,
    mostrarMensaje: function() {
        return 'El gato ' + this.nombre + ' tiene ' + this.edad + ' años.';
    }
};

function mostrarGato() {
    console.log(gato.mostrarMensaje());
}