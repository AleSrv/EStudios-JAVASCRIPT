// COMO ITERAR LAS LISTA 

const array = ["hola", 2,5,90, false , undefined ];

//Forma Antigua (poco eficiente)
for (let i=0 ; i < array.length; i++){
    console.log(array[i]);//
}

//Forma ES6 Moderna forEach()
let suma =0;
const arrayNums = [3,6,2,77,2,3,93,19];
arrayNums.forEach(valor => {
    suma += valor;
});
console.log(suma);

//Busqueda de un valor dentro de una lista find()
//quiero encontrar elemento 90

const variable = array.find(valor=>{
    if (valor === 90){
        return true;
    }
});

console.log(variable);

const listaObjetos = [
    {nombre: "Ale", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Yvette", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Amaya", edad: 29},
];

//FORMA 1
// const objeto = listaObjetos.find(o=>{
//     if (o.nombre === "Lucia"){
//         return true;
//     }
// })
// console.log(objeto.edad);

//FORMA 2
// const objeto = listaObjetos.find(o=>{
//     return o.nombre === "Lucia";
// })
// console.log(objeto.edad);


//FORMA 3 
const objeto = listaObjetos.find(o=> o.nombre === "Lucia")
console.log(objeto.edad);//3

//FORMA 4
const {edad} = listaObjetos.find(o=> o.nombre ==="Lucia")
console.log(edad); // 3