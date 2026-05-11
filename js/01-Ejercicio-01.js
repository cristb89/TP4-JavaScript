/*

1- Crea un objeto llamado auto que tenga algunas características como el color,
marca, modelo y si está encendido o apagado.
Crea los métodos necesarios para permitir encender y apagar el auto.

Output:
objeto.encender(); => auto encendido
objeto.apadar() => El auto se apagó

*/

let auto = {
    color: "Blanco",
    marca: "Renault",
    modelo: "Kwid",
    estado: "Apagado",
    encenderAuto(){
        document.write(`<p>El auto se encedió.</p>`);
        this.estado = "Encendido";
    },
    apagarAuto(){
        document.write(`<p>El auto se apagó.</p>`);
        this.estado = "Apagado";
    }
};

console.log(auto);
auto.encenderAuto();
document.write(`<p>El estado del auto es: ${auto.estado}</p>`);
auto.apagarAuto();
document.write(`<p>El estado del auto es: ${auto.estado}</p>`);