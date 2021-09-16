class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  mostrarDatos() {
    document.write(`Nombre: ${this.nombre} Telefono: ${this.telefono}`);
  }

  get obtenerNombre() {
    return this.nombre;
  }
  get obtenerTelefono() {
    return this.telefono;
  }

  set modificarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }
  set modificarTelefono(nuevotelefono) {
    this.telefono = nuevotelefono;
  }
}

class Agenda {
  constructor(tamanio) {
    this.contactos = [];
    this.tamanio = tamanio;
  }

  set modificarTamanio(cantidad) {
    this.tamanio = cantidad;
  }

  agregarContacto(contacto) {
    // verificar si el contacto existe
    if (this.existeContacto(contacto)) {
      console.log("El contacto ya existe no se puede agregar");
    } else {
      // verificar si la agenda esta llena
      if (!this.agendaLlena()) {
        this.contactos.push(contacto);
        console.log("contacto añadido");
        this.listarContactos();
      }
    }
  }

  existeContacto(contacto) {
    const exist = this.contactos.find(
      (contactoExistente) => contactoExistente.nombre === contacto.nombre
    );
    // console.log('dentro de existeContacto ' + exist);
    if (exist) {
      return true;
    } else {
      return false;
    }
  }

  listarContactos() {
    for (let i = 0; i < this.contactos.length; i++) {
      console.log(
        `Contacto: ${this.contactos[i].obtenerNombre} Telefono: ${this.contactos[i].obtenerTelefono}`
      );
    }
  }

  buscarContacto(contacto) {
    const encontrado = this.contactos.find(
      (existentes) => existentes.nombre === contacto
    );
    if(encontrado){
        console.log("contacto encontrado ");
    }else{
        console.log("Este contacto no existe");
    }
  }

  eliminarContacto(contacto) {
    let contactosFiltrados = this.contactos.filter(
      (contactoExistente) => contactoExistente.nombre != contacto.nombre
    );
    console.log("contactos que deberian quedar" + contactosFiltrados);
  }

  agendaLlena() {
    if (this.contactos.length === this.tamanio) {
      console.log("agenda llena");
      return true;
    } else {
      console.log("queda espacio");
      return false;
    }
  }

  huecosLibres() {
    let cantidadEspacios = this.tamanio - this.contactos.length;
    console.log("Cantidad de espacio disponible " + cantidadEspacios);
  }
}

let agendaPrueba = new Agenda(10);

do {
  let opcion = parseInt(
    prompt(
      "Seleccione una opcion: 1- agregar contacto, 2- cambiar tamaño de agenda, 3- listar contactos, 4- buscar contacto"
    )
  );

  switch (opcion) {
    case 1:
      // agregar contacto solo si la agenda tiene huecos libres

      agendaPrueba.huecosLibres();

      let nombre = prompt("ingrese un nombre");
      let telefono = prompt("ingrese un telefono");
      let nuevoContacto = new Contacto(nombre, telefono);

      agendaPrueba.agregarContacto(nuevoContacto);
      break;
    case 2:
      // cambiar tamaño
      let nuevoTamanio = parseInt(
        prompt("ingrese la cantidad de contactos que desea tener")
      );
      agendaPrueba.modificarTamanio = nuevoTamanio;
      console.log(
        "Tamaño de agenda modificado, cantidad actual: " + nuevoTamanio
      );

      break;
    case 3:
        // listar contactos
        agendaPrueba.listarContactos();
        break;
    case 4:
        // buscar contacto
        let contactoBuscado = prompt('ingrese el nombre que busca');
        agendaPrueba.buscarContacto(contactoBuscado);
        break;
    default:
      document.write("Ingreso una opcion invalida");
  }
} while (confirm("quiere realizar otra operacion?"));
