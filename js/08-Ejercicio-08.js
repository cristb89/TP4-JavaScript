/*

8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse".
Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos
"saludar" y "despedirse".

*/

class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        if (nuevoNombre !== "") {
            this._nombre = nuevoNombre;
        } else {
            alert(`El valor asignado de nombre es incorrecto`);
        }
    }

    get edad(){
        return this._edad;
    }

    set edad(nuevaEdad){
        if (nuevaEdad > 0) {
            this._edad = nuevaEdad;
        } else {
            alert(`El valor asignado de edad es incorrecto`);
        }
    }

    get profesion(){
        return this._profesion;
    }

    set profesion(nuevaProfesion){
        if (nuevaProfesion !== "") {
            this._profesion = nuevaProfesion;
        } else {
            alert(`El valor asignado de profesión es incorrecto`);
        }
    }

    saludar() {
        document.write(`<p>Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.</p>`);
    }

    despedirse() {
        document.write(`<p>Adiós, me despido</p>`);
    }
}

const persona1 = new Persona("Juan", 30, "Ingeniero");
const persona2 = new Persona("María", 25, "Diseñadora");

persona1.saludar();
persona1.despedirse();
document.write(`<hr>`);
persona2.saludar();
persona2.despedirse();
document.write(`<hr>`);