/*

3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área

*/

class Rectangulos {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
        this.perimetro;
        this.area;
    };
    
    modificarAltRec(modAlto){
        this.alto = modAlto;
    };

    modificarAncRec(modAncho){
        this.ancho = modAncho;
    };

    calcularPerimetro(){
        this.perimetro = (this.alto * 2) + (this.ancho * 2);
        document.write(`<p>Perimetro: ${this.perimetro} cm</p>`);
    };

    calcularArea(){
        this.area = (this.ancho * this.alto);
        document.write(`<p>Superficie: ${this.area} cm²</p>`);
    };

    mostrar(){
        document.write(`<h2>Propiedades del rectángulo</h2>`);
        document.write(`<p>Altura: ${this.alto} m</p>`);
        document.write(`<p>Ancho: ${this.ancho} cm</p>`);
    };
};

const rectangulo001 = new Rectangulos(2, 4);

console.log(rectangulo001);
rectangulo001.mostrar();
rectangulo001.calcularPerimetro();
rectangulo001.calcularArea();

document.write(`<h2>Modifico el rectángulo</h2>`);
document.write(`<hr>`);

rectangulo001.modificarAltRec(3);
rectangulo001.modificarAncRec(6);
rectangulo001.mostrar();
rectangulo001.calcularPerimetro();
rectangulo001.calcularArea();