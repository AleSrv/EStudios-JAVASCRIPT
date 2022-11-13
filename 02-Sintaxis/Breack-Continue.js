//CASOS ESPECIFICOS - BREACK  / CONTINUE

let lista = [1,2,3,4,5,6,7,8];

for(let i=0; i < lista.length; i++){
    if(lista[i]===3){
        continue;
    }
    if(lista[i]>5){
        break;
    }
    console.log(lista[i])

}

//CUALM ES EL AMBITO DEL BUCLE
console.log(i)

