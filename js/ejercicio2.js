// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.


class Cuenta{
    constructor(titular){
        this.titular=titular
        this.saldo=0;
    }

    ingresar(monto){
        this.saldo+=monto;
        document.write(`<p>Ingreso $${monto}</p>`);
    }

    extraer(monto){
        if(this.saldo >= monto){
            this.saldo-=monto;
            document.write(`<p>Extraccion de $${this.saldo}</p>`);
        }else{
            document.write('<br>Fondos insuficientes');
        }
    }

    informar(){
        document.write(`<p>La cuenta de ${this.titular}, posee un saldo de $${this.saldo}</p>`);
    }
}

let cuenta=new Cuenta('Alex');
cuenta.informar();
cuenta.ingresar(10000);
cuenta.informar();
cuenta.extraer(5000);
cuenta.informar();