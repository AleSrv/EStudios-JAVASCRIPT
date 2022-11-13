// COMO ORDENAR ARRAYS 
//sort()

const array =[2,5,9,1,2,0,4]

console.log(array) // [2,5,9,1,2,0,4]

console.log(array.sort())// [0,1,2,2,4,5,9]

array.sort((a,b)=>{
    if(a<b){
        return +1
    } else if (a>b){
        return -1
    } else { // (a===b)
        return 0
    }
})
console.log(array) // [9,5,4,2,2,1,0]

array.sort((a,b)=>{
    return +15656 // da igual el valor tiene que ser positivo + ORDENA DE MAYOR A MENOR
})
console.log(array) // [9,5,4,2,2,1,0]

array.sort((a,b)=>{
    return -188888 // da igual el valor tiene que ser negativo - ORDENA DE MENOR A MAYOR
})
console.log(array) // [0,1,2,2,4,5,9]

//ORDENAR ARRAY UNICAMENTE NUMERICOS

arrayNumerico = [4,1,7,3,17,3,56,1,546]

arrayNumerico.sort((a,b)=>a-b) //si b es mayor que a a-b=negativo ORDENA DE MENOR A MAYOR

console.log(arrayNumerico)// [1,1,3,3,4,7,17,546]

arrayNumerico.sort((a,b)=>b-a) //si b es mayor que a b-a=positivo ORDENA DE MAYOR A MENOR

console.log(arrayNumerico)// [546,56,17,7,4,3,3,1,1]

// INTERASANTE ARRAY DE OBJETOS

const listaObjetos = [
    {nombre: "Ale", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Yvette", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Amaya", edad: 29},
];

listaObjetos.sort((a,b)=>{
    if(a.edad < b.edad){
        return -1
    }else if (a.edad > b.edad){
        return +1
    }else{
        return 0
    }
})
console.log(listaObjetos)

listaObjetos.sort((a,b)=>b.edad-a.edad)
console.log(listaObjetos)


