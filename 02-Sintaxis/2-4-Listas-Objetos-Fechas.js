//LISTAS /Lista array arreglo o vector

const lista= [1,"hola", true,undefined, null];
lista2= new Array(2,"hola", true,undefined, null);
const lista3 = new Array(3);
lista3[0]="Soy el primer elemento, index 0";
const lista4= [lista,lista2,lista3];

console.log(lista)
console.log(lista2)
console.log(lista3);
console.log(lista4)

//OBJETOS

const movil={
    anchura:5,
    altura:10,
    marca: "xiaomi",
    isWhite: true,
    contactos: ["Martin", "Gorka","Raul"],
    tarjeta:{
        marca:"Sandisk",
        almacenamiento:"32GB",
        "altura-tarjeta":4,
    }
}
movil.anyo= 2019;
movil.marca= "Samsung";

console.log(movil.marca);
console.log(movil.tarjeta.marca);
console.log(movil.anyo);


//FECHAS
//librerias de apoyo como Moment.js

const ahora= new Date();
console.log(ahora);

const fechamilis = new Date(10);
console.log(fechamilis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date (2022,0,15); // Enero es 0 , febrero 1 , Marzo 2 etc... Son un array
console.log(fecha_valores);

const dia = ahora.getDate();
console.log(dia)
const mes = ahora.getMonth()+1 // importante los meses son mas 1  
console.log(mes)
const anio = ahora.getFullYear()
console.log(anio)

console.log(dia,mes,anio);



