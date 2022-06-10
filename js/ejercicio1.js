// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

let auto={
    color:'Rojo',
    marca:'Toyota',
    modelo:'Etios',
    motor:false,
    encenderAuto(){
        this.motor=true;
    },

    apagarAuto(){
        this.motor=false;
    }
}

document.write('<br>Color: '+auto.color);
document.write('<br>Marca: '+auto.marca);
document.write('<br>Modelo: '+auto.modelo);
document.write('<br>Estado del auto: '+((auto.motor)?'Encendido':'Apagado'));

// //encender el auto
auto.encenderAuto();
document.write('<br>Estado del auto: '+((auto.motor)?'Encendido':'Apagado'));

// //apago el auto
auto.apagarAuto();
document.write('<br>Estado del auto: '+((auto.motor)?'Encendido':'Apagado'));