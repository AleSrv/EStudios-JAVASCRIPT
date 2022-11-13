// tarea 07 numero 2

datos = {
    nombre:"Alejandro",
    apellido: "Fernandez", 
    edad: 47,
    altura: 1.89,
    eresDesarrollador: true,
}

var_edad = datos.edad
console.log(var_edad)// 47

const lista = [
    {...datos},
    {nombre: "Yvette", apellido: "Garcia" , edad:55, altura: 1.60, eresDesarrollador: false},
    {nombre: "Fran", apellido: "Collado" , edad:44, altura: 1.80, eresDesarrollador: false},
    {nombre: "Daniel", apellido: "San Martin" , edad:37, altura: 1.85, eresDesarrollador: false},
]

const ordenada = lista.sort((a,b)=>a.edad - b.edad)
console.log(ordenada)