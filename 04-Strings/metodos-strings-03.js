// METODOS DE CADENAS DE TEXTO III

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

console.log(texto_largo.match(/no/g));// ["no" ,"no", "no", "no" ] 4 veces in cluido por ej en "mono"

// metodo para saber si incluye una palabra includes

console.log(texto_largo.includes("prefiere")) // true
console.log(texto_largo.includes("caca")) // false

//SABER SI UN TEXTO EMPIEZA CON UNA PALABRA "startsWith" / TERMINA CON UNA PALABRA "endsWith"

console.log(texto_largo.startsWith("Tito")) // true
console.log(texto_largo.endsWith(".")) // true




