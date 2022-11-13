//ENCONTRAR ALGUN VALOR EN LISTA
//.some()

const array=[3, 7, 2, 4, 7, 9, 42, 35, 7868, 23, -2]

const res = array.some(valor => valor < 0)
console.log(res)//true 

const existe = array.some(valor => valor === 9)
console.log(res)//true 

const listaObjetos = [
    {nombre: "Ale", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Yvette", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Amaya", edad: 29},
];

const existeAle = listaObjetos.some(persona => persona.nombre ==="Ale")
console.log(existeAle)//true

// COMO OBTENER LISTA A PARTIR DE OBJETO ITERABLE  // from()

const str = "Hola soy Gorka"
console.log(str[0])//H

const ar_str = Array.from(str);
console.log(ar_str) // ['H','o','l','a',' ','s',.....]

const set = new Set([2,3,"Hola", 4])
const ar_set = Array.from(set)
console.log(ar_set)// [2,3,"Hola", 4]

const keys = array.keys()
console.log(keys)//{[Iterator]}
console.log(typeof keys)// object

const ar_keys = Array.from(keys)
console.log(ar_keys)//[0,1,2,3,4,5,6,7,8,9,10]
console.log(ar_keys)

