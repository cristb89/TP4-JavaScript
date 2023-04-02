/*

Modelando clases

2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
● Una propiedad titular con el valor "Alex".
● Una propiedad saldo, teniendo como valor inicial 0.
● Un método ingresar() que permita añadir dinero a la cuenta, pasando la
cantidad como parámetro
● Un método extraer() que permita retirar la cantidad pasada como
parámetro.
● Un método informar() que retorne la información del estado de la cuenta.
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
mostrar la descripción del estado de la cuenta.

*/

// PROTOTIPO

class Cuenta {

    // PROPIEDADES
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    // METODOS
    ingresar(deposito){
        this.saldo += deposito;
        document.write("<p>Su deposito fue de $" + deposito + " y se realizo correctamente. Su saldo es de $" + this.saldo + "</p>");
    }

    extraer(retiro){
        this.saldo -= retiro;
        document.write("<p>Su retiro fue de $" + retiro + " y se realizo correctamente. Su saldo es de $" + this.saldo + "</p>");
    }

    informar(){
        document.write("<p>Su saldo es de $" + this.saldo + "</p>");
    }
}

// INSTANCIAS
const cuenta001 = new Cuenta("Alex", 0);

// EJECUCIÓN DE LOS METODOS

cuenta001.informar();
cuenta001.ingresar(3000);
cuenta001.extraer(2500);
cuenta001.informar();