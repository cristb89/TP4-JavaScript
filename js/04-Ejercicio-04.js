/*

4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
las propiedades código, nombre y precio, además del método imprime datos, el
cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores
de los tres objetos instanciados.


*/

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    };

    imprimirDatos(){
        document.write(`<p>CODIGO: ${this.codigo}</p>`);
        document.write(`<p>NOMBRE: ${this.nombre}</p>`);
        document.write(`<p>PRECIO: $${this.precio}</p>`);
        document.write(`<hr>`);
    };
};

const jabon = new Producto(32, "Jabon Lux (x3)", 3000);
const fideo = new Producto(7,"Fideo Entrefino Cotella (500g)", 900);
const gaseosa = new Producto(15, "Coca-Cola (3L)", 3500);

let productos = [jabon, fideo, gaseosa];

for (let i = 0; i < productos.length; i++) {
    productos[i].imprimirDatos();
}