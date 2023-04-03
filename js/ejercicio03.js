/*

Rectángulos

3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área

*/

// PROTOTIPO
class Rectangulos {

    // PROPIEDADES
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    };

    // METODOS
    modificar(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    };

    mostrar(){
        document.write("<p><strong>ALTO:</strong> " + this.alto + "<br><strong>ANCHO:</strong> " + this.ancho + "</p>");
    };

    perimetro(){
        document.write("<p><strong>*</strong> El perimetro del rectangulo es de " + ((this.alto * 2) + (this.ancho * 2)) + "</p>");
    };

    area(){
        document.write("<p><strong>*</strong> El area del rectangulo es de " + (this.alto * this.ancho) + "</p>");
    };
}

// INSTANCIAS
const rectangulo1 = new Rectangulos(3, 6);

// EJECUCIÓN DE LOS METODOS
document.write("<h1>Rectangulo 1</h1>");
rectangulo1.mostrar();
rectangulo1.perimetro();
rectangulo1.area();
rectangulo1.modificar(2, 4);
document.write("<h1>Modificación Rectangulo 1</h1>");
rectangulo1.mostrar();
rectangulo1.perimetro();
rectangulo1.area();