/*

1- Crea un objeto llamado auto que tenga algunas características como el color,
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
permitir encender y apagar el auto.

Output:
objeto.encender(); => Auto encendido
objeto.apadar(); => El auto se apagó

*/

let auto = {
    
    color: "Blanco",
    marca: "Renault",
    modelo: "Kwid",

    encender: () => {
        document.write("<p>Auto encendido</p>");
    },
    
    apagar: () => {
        document.write("<p>El auto se apagó</p>");
    }

};