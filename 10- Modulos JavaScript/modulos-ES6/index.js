// import {suma, eleva, multiplica, factorial, nombre} from "./modulos/matematicas.js"
//IMPORTAR TODAS LAS FUNCIONES DEL MODULO:
import * as moduloMatematicas from "./modulos/matematicas.js"
import getAutor, {libro} from "./modulos/literatura.js"

const sum =moduloMatematicas.suma(4,5)
console.log(sum)

const potencia =moduloMatematicas.eleva(2,21)
console.log(potencia)

console.log(`Las funciones vienen del archivo ${moduloMatematicas.nombre}`)
console.log(getAutor())
console.log(`Èl libro es: ${libro}`)