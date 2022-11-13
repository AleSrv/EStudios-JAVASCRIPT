// COMPARACIONES

//IGUALDAD : DOS IGUALES (==) COMPARA SOLO EL VALOR , TRES IGUALES (===) COMPARA TB EL TIPO

let a=5;
let b="5";

console.log(typeof a);
console.log(typeof b);

if(a == b){
    console.log("5 es igual a 5");
}

// en === tiene que ser estrictamente igual tipo y valor
if(a === b){
    console.log("5 es MUY igual a 5");
}

//DESIGUALDAD : DESIGUALDAD (!=) COMPARA SOLO EL VALOR ,Y DESIGUALDAD (!==) COMPARA VALOR Y TIPO

let c = 4;
let d="4";

if (c!=d){
    console.log("c es diferente a d");
}

if (c!==d){
    console.log("c es diferente a d"); //es diferente en tipo pero igual en valor
}

//cCOMPARACIONES MAYOR QUE Y MENOR QUE 

let max = 10;
let min = 5  ;

if(max > min ){
    console.log("Max es mayor que min")
}

if(max >= min ){
    console.log("Max es mayor o igual que min")
}


if (min < max){
    console.log("min es menor que max")
}

if (min <= max){
    console.log("min es menor o igual que max")
}