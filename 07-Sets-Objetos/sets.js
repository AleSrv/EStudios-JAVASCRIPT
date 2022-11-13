//Sets o Conjuntos // VALORES UNICOS EN CONJUNTOS

const array= [1,2,3,4,5,2,1,7,"hola", {id:5},{id:5}]

console.log({id:5} === {id:5}) // false porque no es el mismo objeto

const miset = new Set (array);

console.log(array)// [1,2,3,4]
console.log(miset)// Set { 1,2,3,4 }

//Los set nos permite asegurarnos que no hay valores duplicados Ej: bases de datos

// .add() Agregar valores
miset.add(9)
console.log(miset) // {1,2,3,4,5,2,1,7,"hola", {id:5},{id:5} , 9}
miset.add(4)
console.log(miset) // {1,2,3,4,5,2,1,7,"hola", {id:5},{id:5} , 9} // no agrega valores repetidos

//.delete() // ELIMINAR ELEMENTOS
miset.delete("hola")
console.log(miset) // {1,2,3,4,5,2,1,7,{id:5},{id:5} , 9} // no agrega valores repetidos

//.clear() // ELIMINAR TODOS LOS VALORES
// miset.clear()
// console.log(miset)// Set {}

//.has() // VER SI CONTIENE UN VALOR EN EL CONJUNTO
// console.log(array.includes(2)) // true
console.log(miset.has(4)) // true

//.size() // PROPIEDAD CANTIDAD DE ELEMENTOS (NO METODO)
console.log(miset.size) // 9 

// RECORRER ELEMENTOS DE UN SET FOREACH
miset.forEach(valor=>{
    console.log(valor); // 1,2,3,4,5,2,1,7,{id:5},{id:5} , 9
})

const it_miset = miset.values()
console.log(it_miset) // {[Iterator]}
const ar_miset = [...miset]
console.log(ar_miset);// [1,2,3,4,5,2,1,7,{id:5},{id:5} , 9]
console.log(ar_miset[2])// 3

