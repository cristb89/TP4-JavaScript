/*

5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
- mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación.
- esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
persona es mayor de edad.
- mostrarDatos: devuelve toda la información del objeto.
- generaDNI(): genera un número aleatorio de 8 cifras.


*/

class Persona {
    constructor(nombre, apellido, edad, sexo, peso, altura, anioDeNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.DNI = "No generado";
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioDeNacimiento = anioDeNacimiento;
    };

    mostrarGeneracion(){
        if ((this.anioDeNacimiento > 1929) && (this.anioDeNacimiento < 1949)) {
            document.write(`<p>GENERACIÓN: Silent Generation</p>`);
            document.write(`<p>RASGO CARACTERÍSTICO: Austeridad</p>`);
        } else if ((this.anioDeNacimiento > 1948) && (this.anioDeNacimiento < 1969)) {
            document.write(`<p>GENERACIÓN: Baby Boom</p>`);
            document.write(`<p>RASGO CARACTERÍSTICO: Ambición</p>`);
        } else if ((this.anioDeNacimiento > 1968) && (this.anioDeNacimiento < 1981)) {
            document.write(`<p>GENERACIÓN: Generación X</p>`);
            document.write(`<p>RASGO CARACTERÍSTICO: Obseción por el éxito</p>`);
        } else if ((this.anioDeNacimiento > 1980) && (this.anioDeNacimiento < 1994)) {
            document.write(`<p>GENERACIÓN: Generación Y</p>`);
            document.write(`<p>RASGO CARACTERÍSTICO: Frustración</p>`);
        } else if ((this.anioDeNacimiento > 1993) && (this.anioDeNacimiento < 2011)) {
            document.write(`<p>GENERACIÓN: Generación Z</p>`);
            document.write(`<p>RASGO CARACTERÍSTICO: Irreverencia</p>`);
        } else {
            document.write(`<p>GENERACIÓN: Sin generación especifica</p>`);
            document.write(`<p>RASGO CARACTERÍSTICO: Ninguna</p>`);
        }
    };

    esMayorDeEdad(){
        if (this.edad > 17) {
            document.write(`<p>${this.nombre} es mayor de edad.</p>`);
        } else {
            document.write(`<p>${this.nombre} es menor de edad.</p>`);
        }
    };

    mostrarDatos(){
        document.write(`<p>NOMBRE: ${this.nombre}</p>`);
        document.write(`<p>APELLIDO: ${this.apellido}</p>`);
        document.write(`<p>EDAD: ${this.edad} años</p>`);
        document.write(`<p>DNI: ${this.DNI}</p>`);
        document.write(`<p>SEXO: ${this.sexo}</p>`);
        document.write(`<p>PESO: ${this.peso} kl</p>`);
        document.write(`<p>ALTURA: ${this.altura} cm</p>`);
        document.write(`<p>AÑO DE NACIMIENTO: ${this.anioDeNacimiento}</p>`);
    };

    generarDNI(){
        this.DNI = Math.floor(Math.random() * 100000000);
    };
};

const cristian = new Persona("Cristian", "Brandan", 35, "Masculino", 64, 170, 1989);

cristian.mostrarGeneracion();
cristian.esMayorDeEdad();
cristian.generarDNI();
cristian.mostrarDatos();