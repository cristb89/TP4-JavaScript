/*

4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
las propiedades código, nombre y precio, además del método imprime datos, el
cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores
de los tres objetos instanciados.

*/

// PROTOTIPO
class Producto {
    // PROPIEDADES
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    };

    // METODOS
    imprimirDatos(){
        document.write("<p><strong>CÓDIGO:</strong> " + this.codigo + "<br><strong>NOMBRE:</strong> " + this.nombre + "<br><strong>PRECIO:</strong> " + this.precio + "</p>");
    };
}

// INSTANCIAS
const lecheEnPolvo = new Producto(001, "Leche en polvo", 800);
const azucar = new Producto(002, "Azucar", 250);
const cafe = new Producto(003, "Cafe", 700);

let listaDeProductos = [lecheEnPolvo, azucar, cafe];

// EJECUCIÓN DE LOS METODOS
listaDeProductos.forEach(element => {
    element.imprimirDatos();
});