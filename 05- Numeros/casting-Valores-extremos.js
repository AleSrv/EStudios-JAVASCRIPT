//1-OPERADOR .valueOf() - Obtener valores a partir  de literales
//2-NaN - Infinity
//3-Convertir los string a valores numericos con Number, parseInt , parseFloat
//4- Numeros hexadecimales
//5-Obtener valores Max y Min

//1-OPERADOR .valueOf() - Obtener valores a partir  de literales

let a =2;
let b= new Number(3);

console.log(a); // 2
console.log(b); // Number 3{}
console.log(a + b); // 5 // internamente have la suma de los valores
console.log(a.valueOf() + b.valueOf()); // 5 


console.log(b.valueOf());// valor primitivo 3

let str = new String("Hola soy un string");

console.log(str); // {0:"H", 1:"o", 2:"l", 3:"a..."}
console.log(str.valueOf());// Hola soy un string

//2- NaN (Not a Number) - Infinity

let n = Number('Adios');
console.log(n); // NaN 
console.log(isNaN(n)); // true nos dice que es un NaN

let num = 19;
let divisor =0;
console.log(num/divisor) // Infinity 

let divisor_2 = null;
console.log(num/divisor_2) // Infinity 

//3-Convertir los string a valores numericos con Number, parseInt , parseFloat

let numero = "5.89";
let num2= 17.2;

console.log(typeof numero); // string "5.89"
console.log(Number(numero)); // numero "5.89"

console.log(numero + num2) // 5.8917.2  string concatenada
console.log(Number(numero) + num2); // numero 23.09 

console.log(typeof numero); // string
console.log(typeof parseInt(numero)); // number

console.log(parseInt(numero)); // 5
console.log(parseFloat(numero)) // 5.89

//4- Numeros hexadecimales (base 16)

let numHex = '0x3a5b7';
console.log(parseInt(numHex)); // 239031

//5-Obtener valores Max y Min

let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision); //expresion minima en JS = 2.220446049250313e-16
console.log(min_valor_JS); // valor minimo en JS = 5e-324
console.log(max_valor_JS); // Valor maximo en JS = 1.7976931348623157e+308

console.log( 2 ** 1023); // 8.98846567431158e+307
console.log( 2 ** 1024); // Infinity