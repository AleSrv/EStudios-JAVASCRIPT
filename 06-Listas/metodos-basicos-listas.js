// COMO TRABAJAR CON LISTAS 
//push(agrega al final) // pop(elimina al final)//
//unshift(agrega al principio) // shift (elimina al principio)
//splice (indice, "" - quita / 0 - agrega / 1 - modifica , valores )

// let array = new Array();
// ó
let var1 = 45;
let array = [1,"Hola",false,null,undefined,{id:5}, var1];

console.log(array);

//ACCEDER A LOS VALORES A TRAVES DE SU POSICION//
//============================================//

console.log(array[0]);
console.log(array[4]);

//METODO PARA AGREGAR NUEVOS VALORES//
//=====================================//
//.push() //unshift() => mutan el valor de nuestro array

//push() agraga al final
array.push(6,true,"final");
console.log(array);

//unshift() => Agraga valor al principio

array.unshift("inicio", ["cadena",48]);
console.log(array);

//METODOS PARA ELIMINAR //
//=====================//
//.pop // shift => mutan valor de array

//pop() => elimina al final
array.pop();
console.log(array);

//shift () => Elimina al principio 
array.shift()
console.log(array);

//METODO PARA ELIMINAR , MODIFICAR , AÑADIR VALORES
// .splice(x,y,z)


//Eliminar valores con splice (indice, valoresAEliminar)
const array3 = [1,2,3,4,5,6];
array3.splice(2,1);
console.log(array3); // [1,2,,4,5,6]
array3.splice(2); // elimina hasta el final
console.log(array3); // [1,2]

//Agregar valores con splice(indice,0,valoresAAgregar)

    array3.splice(2,0,"Hola","chau")
    console.log(array3); // [1,2, "Hola" , "chau"]

//Modificar valores  .splice(indice,1, valores)

array3.splice(3,1,"hasta luego");
console.log(array3); // [1,2, "Hola" , "hasta luego"]

