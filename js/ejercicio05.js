/*

5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

*/

// PROTOTIPO
class Persona{
    // PROPIEDADES
    constructor(nombre, edad, dni, sexo, peso, altura, anioDeNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioDeNacimiento = anioDeNacimiento;
    };
    // METODOS
    mostrarGeneracion(){
        if (this.anioDeNacimiento >= 1930 && this.anioDeNacimiento <= 1948) {
            document.write("<p><strong>NOMBRE DE GENERACIÓN:</strong> Silent Generation (Los niños de la posguerra).<br>");
            document.write("<strong>RASGO CARACTERISTICO:</strong> Austeridad.</p>");
        } else if (this.anioDeNacimiento >= 1949 && this.anioDeNacimiento <= 1968) {
            document.write("<p><strong>NOMBRE DE GENERACIÓN:</strong> Baby Boom.<br>");
            document.write("<strong>RASGO CARACTERISTICO:</strong> Ambición.</p>");
        } else if (this.anioDeNacimiento >= 1969 && this.anioDeNacimiento <= 1980) {
            document.write("<p><strong>NOMBRE DE GENERACIÓN:</strong> Generación X.<br>");
            document.write("<strong>RASGO CARACTERISTICO:</strong> Obseción por el éxito.</p>");
        } else if (this.anioDeNacimiento >= 1981 && this.anioDeNacimiento <= 1993) {
            document.write("<p><strong>NOMBRE DE GENERACIÓN:</strong> Generación Y.<br>");
            document.write("<strong>RASGO CARACTERISTICO:</strong> Frustración.</p>");
        } else if (this.anioDeNacimiento >= 1994 && this.anioDeNacimiento <= 2010) {
            document.write("<p><strong>NOMBRE DE GENERACIÓN:</strong> Generación Z.<br>");
            document.write("<strong>RASGO CARACTERISTICO:</strong> Irreverencia.</p>");
        } else {
            console.log("No pertenece a un rasgo caracteristico");
        }
    };

    esMayorDeEdad(){
        if (this.edad >= 18) {
            document.write("<p><strong>" + this.nombre + "</strong> es mayor de edad.</p>");
        } else {
            document.write("<p><strong>" + this.nombre + "</strong> es menor de edad.</p>");
        }
    };

    mostrarDatos(){
        document.write("<p><strong>NOMBRE:</strong> " + this.nombre + "<br><strong>EDAD:</strong> " + this.edad + "<br><strong>DNI:</strong> " + this.dni + "<br><strong>SEXO:</strong> " + this.sexo + "<br><strong>PESO:</strong> " + this.peso + "<br><strong>ALTURA:</strong> " + this.altura + "<br><strong>AÑO DE NACIMIENTO:</strong> " + this.anioDeNacimiento + "</p>"
        );
    };

    generaDNI(){
        document.write("<p><strong>NUEVO DNI:</strong> ");
        for (let i = 0; i < 8; i++) {
            document.write(Math.floor(Math.random() * 10));               
        }
        document.write(".</p>");
    };
};

// INSTANCIAS
const persona1 = new Persona("Carlos", 70, 34325610, "Masculino", 85, 1.70, 1999);

// EJECUCIÓN DE LOS METODOS
persona1.mostrarDatos();
persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
persona1.generaDNI();