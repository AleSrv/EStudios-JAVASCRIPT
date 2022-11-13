// COMO OBTENER UNA LISTA A PARTIR DE OTRA .slice() [slice significa como porción]

const array= ["hola", 1,2,3,true,false,"adios"];

// NO MODIFICA EL VALOR ORIGINAL DEL ARRAY ORIGINAL

console.log(array.slice(1,4)); // [1,2,3]

const arra2 = array.slice(4,6);
console.log(arra2); // [true , false]

const array3 = array.slice(4,-1);
console.log(array3);// [true , false]

