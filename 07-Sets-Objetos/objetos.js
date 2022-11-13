//TRABAJANDO CON OBJETOS
const obj = {
    id: 4,
    nombre:"juan",
    apellido: "Gonzalez",
    isDeveloper: true,
    libros_favoritos: ["El método", "El codigo de la manifestación"],
    "4-juegos": [1,2,3,4]
}

console.log(obj.id) // 4
console.log(obj) // objeto completo
console.log(obj["4-juegos"]) // [1,2,3,4]

const prop = "isDeveloper";
console.log(obj[prop]) // true
// console.log(obj.prop) // NO SE PUEDE USAR UNA PROPIEDAD DIRECTAMENTE ASI 

const obj2 = obj; // COPIAMOS OBJ EN OBJ2
console.log(obj2);

obj2.nombre="Iñigo"; // DAMOS UN NOMBRE A OBJ2.NOMBRE 
console.log(obj2.nombre) // Iñigo
//ESTO PASA CON OBJETOS . CON VARIABLES PRIMITIVAS O NUMEROS NO SE COPIA LA REFERENCIA
console.log(obj.nombre) // Iñigo // OBJ FUE MODIFICADO POR OBJ2 PORQUE SE PASO LA REFERENCIA DE MEMORIA

let val1 = 4;
let val2 = val1;
val2 = 6;
console.log(val1) // 4
console.log(val2);// 6

//  /   /   /   /   /      /    COPIAR VALORES DE UN OBJETO (SIN MODIFICAR EL OBJETO ORIGINAL) //    /   /   /   /   /   /   /   /   /   

const obj3 = {...obj};

console.log(obj.nombre) // Iñigo
console.log(obj3.nombre) // Iñigo
obj3.nombre = "Alejandro";
console.log(obj.nombre) // Iñigo
console.log(obj3.nombre) // Alejandro

//  /   /   /   /   /   /   /   COMO ORDENAR LISTAS DE OBJETOS EN FUNCION DE UNA PROPIEDAD   / /   /   /   /   /   /   /   /   /   /

const listaPeliculas = [
    {titulo : "x", anyo : 2012},
    {titulo : "Los que el viento se llevo", anyo : 1939},
    {titulo : "Titanic", anyo : 1997},
    {titulo : "Moana", anyo : 2016},
    {titulo : "El efecto Mariposa", anyo : 2004},
    {titulo : "TED", anyo : 2012},
]

console.log(listaPeliculas)

//  /   /   /   /   /   /   /   ORDENAR PELICULA .SORT() // MUTA EL OBJETO ORIGINAL

listaPeliculas.sort((a,b) => a.anyo - b.anyo)
console.log(listaPeliculas)