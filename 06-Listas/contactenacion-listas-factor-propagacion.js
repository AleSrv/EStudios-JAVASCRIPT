// UNIR LISTAS  concat

let lista1 = ["hola", 1,2,3];
let lista2 = [4,5,6, "adios"];

let lista3 = lista1.concat(lista2);
console.log(lista3)// ["hola", 1,2,3,4,5,6, "adios"]
console.log(lista1)
console.log(lista2)
// no modeifica los valores de lista concat

//Unir listas con factor propagación//
//**********************************/

console.log(...lista3); // hola 1 2 3 4 5 6 adios

const lista4 = [...lista1,...lista2]; // PROPAGACION  
console.log(lista4); //UNA LISTA CON TODOS LOS ELEMENTOS DE LAS LISTAS hola 1 2 3 4 5 6 adios

//  ERROR ! MAL ENTENDIDO EL CONCEPTO DE PROPAGACION

const lista5 = [lista1,lista2];
console.log(lista5);// lista con dos elementos 


