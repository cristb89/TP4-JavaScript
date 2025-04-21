/*

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
Rectángulos

*/

class Cuenta {
    constructor(titular){
        this.titular = titular;
        this.saldo = 0;
    }

    ingresar(deposito){
        
        document.write(`<p>Ingresaste $${deposito}</p>`);

        this.saldo = this.saldo + deposito;
    }

    extraer(retiro){
        
        document.write(`<p>Retiraste $${retiro}</p>`);
        this.saldo = this.saldo - retiro;
    }

    informar(){
        document.write(`<p>${this.titular} tu saldo es: $${this.saldo}</p>`);
    }
};

const cuenta001 = new Cuenta("Alex");

document.write(`<p>TITULAR: ${cuenta001.titular}</p>`);
document.write(`<p>SALDO: $${cuenta001.saldo}</p>`);
cuenta001.ingresar(5000);
cuenta001.extraer(2500);
cuenta001.informar();