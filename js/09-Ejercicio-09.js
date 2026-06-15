/*

9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido".
Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido".
Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para
verificar que cada animal emite el sonido adecuado.

*/

class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    get Nombre() {
        return this.nombre;
    }

    set Nombre(nuevoNombre) {
        if (nuevoNombre !== "") {
            this.nombre = nuevoNombre;
        }
    }

    get Edad() {
        return this.edad;
    }

    set Edad(nuevaEdad) {
        if (nuevaEdad > 0) {
            this.edad = nuevaEdad;
        }
    }

    emitirSonido() {
        document.write(`<p>El animal emite un sonido</p>`);
    }
}

class Perro extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }

    emitirSonido() {
        document.write(`<p>El perro ${this.nombre} dice: ¡Guau!</p>`);
    }
}

class Gato extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }

    emitirSonido() {
        document.write(`<p>El gato ${this.nombre} dice: ¡Miau!</p>`);
    }
}

const miPerro = new Perro("Morita", 9);
const miGato = new Gato("Susi", 1);

miPerro.emitirSonido(); // El perro Morita dice: ¡Guau!
document.write(`<hr>`);
miGato.emitirSonido(); // El gato Susi dice: ¡Miau!