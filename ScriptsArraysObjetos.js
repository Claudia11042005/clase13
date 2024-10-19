const personas = [
    { nombre: 'Carlos', edad: 25 },
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Luis', edad: 22 }
];

function mostrarNombresPersonas() {
    personas.forEach(persona => {
        console.log('Nombre: ' + persona.nombre);
    });
}

const coches = [
    { marca: 'Toyota', modelo: 'Corolla' },
    { marca: 'Honda', modelo: 'Civic' },
    { marca: 'Ford', modelo: 'Mustang' },
    { marca: 'Chevrolet', modelo: 'Camaro' },
    { marca: 'Tesla', modelo: 'Model 3' }
];

function mostrarModelosCoches() {
    coches.forEach(coche => {
        console.log('Modelo: ' + coche.modelo);
    });
}

const productos = [
    { nombre: 'Laptop', precio: 150 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'Ratón', precio: 30 },
    { nombre: 'Auriculares', precio: 120 }
];

function mostrarProductosCaros() {
    productos.forEach(producto => {
        if (producto.precio > 100) {
            console.log('Producto: ' + producto.nombre + ', Precio: ' + producto.precio);
        }
    });
}

const alumnos = [
    { nombre: 'Laura', nota: 75 },
    { nombre: 'Pedro', nota: 45 },
    { nombre: 'María', nota: 60 },
    { nombre: 'Juan', nota: 80 },
    { nombre: 'Sofía', nota: 55 }
];

function mostrarAlumnosAprobados() {
    alumnos.forEach(alumno => {
        if (alumno.nota >= 60) {
            console.log('Alumno: ' + alumno.nombre + ', Nota: ' + alumno.nota);
        }
    });
}

const libros = [
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
    { titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes' },
    { titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón' },
    { titulo: 'El principito', autor: 'Antoine de Saint-Exupéry' }
];

function mostrarTitulosLibros() {
    libros.forEach(libro => {
        console.log('Título: ' + libro.titulo);
    });
}

const peliculas = [
    { titulo: 'Inception', director: 'Christopher Nolan', año: 2010 },
    { titulo: 'The Matrix', director: 'Lana y Lilly Wachowski', año: 1999 },
    { titulo: 'Pulp Fiction', director: 'Quentin Tarantino', año: 1994 },
    { titulo: 'El Padrino', director: 'Francis Ford Coppola', año: 1972 }
];

function mostrarDescripcionesPeliculas() {
    peliculas.forEach(pelicula => {
        console.log(`Película: ${pelicula.titulo}, Director: ${pelicula.director}, Año: ${pelicula.año}`);
    });
}
