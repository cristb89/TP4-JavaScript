/*

6- Crear una clase Libro que contenga al menos las siguientes propiedades:
● ISBN
● Título
● Autor
● Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad.
Crear el método mostrarLibro() para mostrar la información relativa al libro con el
siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

function masPaginas(libro1, libro2) {
    if (libro1.nPaginas > libro2.nPaginas) {
        document.write(`<p>El libro "${libro1.titulo}" tiene más páginas que "${libro2.titulo}".</p>`);
    } else {
        document.write(`<p>El libro "${libro2.titulo}" tiene más páginas que "${libro1.titulo}".</p>`);
    }
};

class Libro {
    constructor(ISBN, titulo, autor, nPaginas) {
        this._ISBN = ISBN;
        this._titulo = titulo;
        this._autor = autor;
        this._nPaginas = nPaginas;
    };

    get ISBN(){
        return this._ISBN;
    };

    set ISBN(nuevoISBN){
        if (nuevoISBN !== "") {
            this._ISBN = nuevoISBN;
        };
    };

    get titulo(){
        return this._titulo;
    };

    set titulo(nuevoTitulo){
        if (nuevoTitulo !== "") {
            this._titulo = nuevoTitulo;
        };
    };

    get autor(){
        return this._autor;
    };

    set autor(nuevoAutor){
        if (nuevoAutor !== "") {
            this._autor = nuevoAutor;
        };
    };

    get nPaginas(){
        return this._nPaginas;
    };

    set nPaginas(nuevoNpaginas){
        if (nuevoNpaginas !== "") {
            this._nPaginas = nuevoNpaginas;
        };
    };
    
    mostrarLibro(){
        document.write(`<p>El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.nPaginas} páginas.</p>`);
    };
};

const caos = new Libro(9789500761277, "Caos!", "Magalí Tajes", 240);
const elPrincipito = new Libro(9788478887194, "El Principito", "Antoine De Saint Exupery", 96);

caos.mostrarLibro();
elPrincipito.mostrarLibro();

masPaginas(caos, elPrincipito);