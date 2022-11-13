//METODOS AVANZADOS
//map()//filter//reduce();

//map()

const array = ["San Sebastian" , "Madrid", "Barcelona", "Alicante", "Bilbao"];

array.forEach(v => {
    console.log(v)
}); //San Sebastian , Madrid , Barcelona ...

const newArray = array.map((valor, indice) => `${indice + 1} : ${valor} `);

console.log(newArray); // ["1:San Sebastian" , "2:Madrid", "3:Barcelona", "4:Alicante", "5:Bilbao"]


//filter()

const listaObjetos = [
    {nombre: "Ale", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Yvette", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Amaya", edad: 29},
];

// personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad >30){
//         return true;
//     }else {
//         return false;
//     }
// })

const personasMayores = listaObjetos.filter(obj => obj.edad >30 )
console.log(personasMayores);

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Yvette");
console.log(nuevaLista);

//reduce()

const valores = [3,56,23,5,90,100];

const suma = valores.reduce((acumulado,cur,i,arrayOriginaL)=>{
    console.log(acumulado); // 
    console.log(cur);
    console.log(i);
    console.log(arrayOriginaL);
    return acumulado + cur
});

console.log(suma); // 277


