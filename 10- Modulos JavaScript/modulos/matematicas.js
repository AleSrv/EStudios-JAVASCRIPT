function suma(a,b){
    return a+b
}

function multiplica(a,b){
    return a*b
}

function eleva(a,b){
    return a**b
}

function factorial(a){
    let factorial=1;
    for (let i=2; i<=a; i++){
        factorial *=i;
    }
    return factorial;
}

// function factorial(n) {
//     if (n === 1) {
//         // la base de la recursión: el factorial de 1 es 1
//         return 1;
//     } else {
//         // la recursión: el factorial de n es n multiplicado por el factorial de n-1
//         return n * factorial(n - 1);
//     }
// }

// // cálculo del factorial de 5
// let resultado = factorial(5);
// // resultado es 120 (5 * 4 * 3 * 2 * 1)


module.exports = {
    suma,
    multiplica,
    eleva,
    factorial
} 