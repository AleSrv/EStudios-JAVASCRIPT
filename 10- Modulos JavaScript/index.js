//Formas de Importar/Exportar modulos
//1.CommonJS - require
//2.Import ES6 - import

// const moduloMatematicas = require("./modulos/matematicas.js")
// const factorial = moduloMatematicas.factorial // SE PUEDE GUARDAR EL MODULO EN UNA VARIABLE
// const {suma} = moduloMatematicas;

// console.log(moduloMatematicas)
//  DEVUELVE EN CONSOLA:
// {
//     suma: [Function: suma],
//     multiplica: [Function: multiplica],
//     eleva: [Function: eleva],
//     factorial: [Function: factorial]
//   }

const {factorial,suma} = require("./modulos/matematicas.js")

const fact = factorial(5); 
console.log(fact)

const sum =suma(12,90);
console.log(sum)
