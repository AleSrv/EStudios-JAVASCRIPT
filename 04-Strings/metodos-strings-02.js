// METODOS DE CADENAS TEXTO II

let input="Escorpio";
let db = "escorpio";

console.log(input===db); // false

//toLowerCase - toUpperCase

console.log(input.toLowerCase()===db.toLowerCase());// true
console.log(input.toUpperCase()===db.toUpperCase());// true

console.log(input.toUpperCase());
console.log(db.toUpperCase());

//FORMAS DE CONCATENAR DOS CADENAS DE CARACTERES

let str_1 = "Hola soy la primera cadena ";
let str_2 = "y yo la segunda cadena";

console.log(str_1.concat("_ ",str_2)); // Hola soy la primera cadena _ y yo la segunda cadena
console.log(str_1.concat(str_2)); // Hola soy la primera cadena y yo la segunda cadena
console.log(str_1 + " " + str_2); // Hola soy la primera cadena y yo la segunda cadena
console.log(`${str_1} ${str_2}`); // Hola soy la primera cadena y yo la segunda cadena

//ELIMINAR ESPACIOS PRINCIPIO Y FINAL INTRODUCIDOS POR USUARIO

let str_3 ="Soy un string con espacio al inicio.   "
console.log(str_3.length); //39
console.log(str_3.trim().length);

let str_4 ="    S   "
////////////12345678901234567890123456789012345678901
console.log(str_4.length); //43
console.log(str_4.trim().length);
console.log(str_4.trimStart().length);
console.log(str_4.trimEnd().length);

//Obtener la letra en cierta posicion // charAT()

let str_5 = "Hola soy el string numero 5. Este string es final";// ["H", "o", "l","a" ...]
console.log(str_5.length) // 27
console.log(str_5.charAt(26)) // 5
console.log(str_5[26]) // 5

//Obtener la posicion de una palabra dentro de una cadena de caracteres

console.log(str_5.indexOf("string")) //12
console.log(str_5[12]) // s 
console.log(str_5.indexOf("sting")) // -1 SIGNIFICA QUE NO LO ENCUENTRA
console.log(str_5.lastIndexOf("string")) //34












