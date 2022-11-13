//Bucles For

// i= i + 1;
// i +=1;
// i++;

for (let i=0; i< 10; i ++){
    console.log(i)
}

let lista = [1,4,6,2,3,7,19,12]

for (let i =0; i < lista.length ; i++){
    console.log(lista[i]);
}

//ESTRUCTURA FOR ... OF

for (let valor of lista){
    console.log(valor);
}

//ESTRUCTURA FOREACH

lista.forEach(valor => {
    console.log(valor)
} )

// ESTRUCTURA FOR ...IN

let persona = {
    nombre: "Gorka",
    apellido: "Villar",
    edad: 34,
    isDeveloper: true
}

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}