let nombre="Alejandro";
let ape="Fernandez";
let estudiante = `${nombre} ${ape}`;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let num_letras = estudiante.length;
let letraNombre= nombre[0];
let letraApellido= ape[ape.length -1];
// Todas válidas
// const estudianteSinEspacios = estudiante.replace(" ", "")
const estudianteSinEspacios = estudiante.replace(/ /g, "")
let estaNombre = estudiante.includes(nombre);

//OUTPUTS:

console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(num_letras);
console.log(letraNombre);
console.log(letraApellido);
console.log(sinespacio);
console.log(estaNombre);




