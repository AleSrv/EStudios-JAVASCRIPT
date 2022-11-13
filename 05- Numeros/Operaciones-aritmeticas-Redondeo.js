// PRINCIPALES OPERADCIONES ARITMETICAS
//REPRESENTACION DE LOS NUMEROS EN CADENAS DE TEXTOS
//REDONDEO DE NUMEROS DECIMALES

// PRINCIPALES OPERADCIONES ARITMETICAS

let a = 3.5;
let b = 4.8;

//  SUMA
console.log(a+b);

//RESTA
console.log(a-b);

//MULTIPLICACION
console.log(a*b);

//DIVISION
console.log(a/b);


//REPRESENTACION DE LOS NUMEROS EN CADENAS DE TEXTOS

let a_s= a.toString();
console.log(typeof a_s) // string

//REDONDEO DE NUMEROS DECIMALES

let c = 3.3;
let d = c*3;

console.log(d); // 9.89999999999
console.log(typeof d) // number

// toFixed(cantidad decimales) // limita numeros de decimales
console.log(d.toFixed(2));// (2 decimales) // 9.90
console.log(typeof d.toFixed(2));// string

// toPrecision() // limita el numero de cifras significativas
console.log(d.toPrecision(2))
console.log(typeof d.toPrecision(2))// string












