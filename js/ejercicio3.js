// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo{
    constructor(lado1, lado2){
        this.alto=lado1;
        this.ancho=lado2;
    }

    set cambiarAltura(nuevaAltura){
        this.alto=nuevaAltura;
    }
    set CambiarAncho(nuevoAncho){
        this.ancho=nuevoAncho;
    }

    get altoRectangulo(){
        return this.alto;
    }

    get anchoRectangulo(){
        return this.ancho;
    }

    get area(){
        return this.alto*this.ancho;
    }

    get perimetro(){
        return 2*(this.alto+this.ancho);
    }

    detalle(){
        return `<p>El rectangulo tiene una altura de ${this.altoRectangulo} cm y un ancho de ${this.anchoRectangulo} cm </P>`;
    }


}


document.write(`<h2>Primer rectangulo</h2>`);

let rectangulo1= new Rectangulo( 10, 9);
document.write(rectangulo1.detalle());
document.write(`El area del rectangulo es ${rectangulo1.area} y su perimetro es ${rectangulo1.perimetro}`);

document.write('<h3>Modificar el rectangulo</h3>');

rectangulo1.cambiarAltura=15;
rectangulo1.CambiarAncho=28;

document.write(rectangulo1.detalle());
document.write(`El area del rectangulo es ${rectangulo1.area} y su perimetro es ${rectangulo1.perimetro}`);

document.write(`<h2>Primer rectangulo</h2>`);

let rectangulo2= new Rectangulo( 5, 15);
document.write(rectangulo2.detalle());
document.write(`El area del rectangulo es ${rectangulo2.area} y su perimetro es ${rectangulo2.perimetro}`);

document.write('<h3>Modificar el rectangulo</h3>');

rectangulo2.cambiarAltura=23;
rectangulo2.CambiarAncho=45;

document.write(rectangulo2.detalle());
document.write(`El area del rectangulo es ${rectangulo2.area} y su perimetro es ${rectangulo2.perimetro}`);

