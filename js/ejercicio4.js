// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  get mostrarCodigo() {
    return this.codigo;
  }

  get mostrarNombre() {
    return this.nombre;
  }

  get mostrarPrecio() {
    return this.precio;
  }

  set modificarCodigo(nuevoCodigo){
      this.codigo=nuevoCodigo;
  }
  set modificarNombre(nuevoNombre){
      this.nombre=nuevoNombre;
  }

  set cambiarPrecio(nuevoPrecio) {
    this.precio = nuevoPrecio;
  }

  mostrarDetalle() {
    return document.write(`<ul>
            <li>Codigo: ${this.codigo}</li>
            <li>Producto: ${this.nombre}</li>
            <li>Precio: $${this.precio}</li>
        </ul>`);
  }
}

let Productos = [];

let leche = new Producto("LS245", "Leche de almendras silk", 400);
let chocolate = new Producto("AB213", "Block 300gr", 350);
let galleta = new Producto("GS223", "Granix sin sal", 160);

Productos.push(leche);
Productos.push(chocolate);
Productos.push(galleta);

for (let i = 0; i < Productos.length; i++) {
 Productos[i].mostrarDetalle();
}
