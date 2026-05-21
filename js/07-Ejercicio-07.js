/*

7- Nos piden realizar una agenda telefónica de contactos.
-Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
-Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
-Los métodos de la agenda serán los siguientes:
-aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
-existeContacto(Contacto): indica si el contacto pasado existe o no.
-listarContactos(): Listar toda la agenda.
-buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
-eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
-agendaLlena(): indica si la agenda está llena.
-huecosLibres(): indica cuántos contactos más podemos ingresar.

-Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

*/

class Contacto { // Prototipo de un Contacto
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nuevoNombre){
        if (nuevoNombre !== "") {
            this._nombre = nuevoNombre;
        } else {
            console.log(`El valor asignado de nombre es incorrecto`);
        }
    }

    get telefono(){
        return this._telefono;
    }

    set telefono(nuevoTelefono){
        if (nuevoTelefono !== "") {
            this._telefono = nuevoTelefono;
        } else {
            console.log(`El valor asignado de telefono es incorrecto`);
        }   
    }

}

class Agenda extends Contacto { // Prototipo de una Agenda
    constructor(nombre, telefono,tamanio = 10) {
        super(nombre, telefono);
        this.tamanio = tamanio;
        this.contactos = [];
    }

    get tamanio(){
        return this._tamanio;
    }

    set tamanio(nuevoTamanio){
        if (nuevoTamanio > 0) {
            this._tamanio = nuevoTamanio;
        } else {
            console.log(`El valor asignado de tamaño es incorrecto`);
        }
    }
    
    aniadirContacto(contacto) { // Se considera que un contacto es igual a otro cuando sus nombres son iguales.
        if (this.contactos.length < this.tamanio) {
            this.contactos.push(contacto);
        } else {
            alert("La agenda está llena.");
        }
    }

    existeContacto(nombre) { // Indica si el contacto pasado existe o no.
        if (this.contactos.some((existeNombre) => existeNombre.nombre.toLowerCase() === nombre.toLowerCase()) === true){
            alert(`El contacto ${nombre} SI existe en la agenda`);
        } else {
            alert(`El contacto ${nombre} NO existe en la agenda`);
        }
    }

    listarContactos() { // Listar toda la agenda.
        agenda.contactos.forEach(contacto => {
            document.write(`<p>${agenda.contactos.indexOf(contacto) + 1}- Nombre: ${contacto.nombre}<br>Teléfono: ${contacto.telefono}</p><hr>`); // El método indexOf() de los arrays se utiliza para encontrar la posición (índice) de un elemento dentro de un arreglo.
        });
    }

    buscarContacto(nombre) { // Busca un contacto por su nombre y muestra su teléfono.
        const contactoEncontrado = this.contactos.find((contacto) => contacto.nombre.toLowerCase() === nombre.toLowerCase());

        if (contactoEncontrado) {
            document.write(`<p>Nombre: ${contactoEncontrado.nombre}<br>Teléfono: ${contactoEncontrado.telefono}</p>`);
        } else {
            alert(`El contacto ${nombre} no se encuentra en la agenda.`);
        }
    }

    eliminarContacto(Contacto) {

    }

    agendaLlena() {

    }

    huecosLibres() {

    }
}

const contacto1 = new Contacto("Cristian", "3816283595");
const contacto2 = new Contacto("Mi Amor", "3816283595");
const contacto3 = new Contacto("Nico", "3816283595");
const contacto4 = new Contacto("Sol", "3816283595");
const contacto5 = new Contacto("Mama", "3816283595");
const contacto6 = new Contacto("Papa", "3816283595");
const contacto7 = new Contacto("Gabi", "3816283595");
const contacto8 = new Contacto("Guti", "3816283595");
const contacto9 = new Contacto("Rosi", "3816283595");
const contacto10 = new Contacto("Nahuel", "3816283595");



const agenda = new Agenda();
agenda.aniadirContacto(contacto1);
agenda.aniadirContacto(contacto2);
agenda.aniadirContacto(contacto3);
agenda.aniadirContacto(contacto4);
agenda.aniadirContacto(contacto5);
agenda.aniadirContacto(contacto6);
agenda.aniadirContacto(contacto7);
agenda.aniadirContacto(contacto8);
agenda.aniadirContacto(contacto9);
agenda.aniadirContacto(contacto10);
agenda.listarContactos();