//TAREA 08 

function verdadero(){
    return true
}

//

function tiempo (){
console.log("Hola soy una promesa")
}

//

const miAsinc = new Promise((resolve, reject) => {
if(verdadero()===true){
    resolve()
}else{
    reject()
}
})

miAsinc
.then(()=>setTimeout(tiempo,5000))
.catch(()=>console.log("ERROR"))
.finally(()=>console.log("Yo me ejecuto siempre"))

//

function* generapar(){
    let id=0;
    while(true){
        id = id+2;
        if (id===10){
            return id
        }
        yield id // Esperando hasta que vuelva a llamar
    }
}

const gen = generapar();

console.log(gen.next().value) // 2
console.log(gen.next().value) // 4
console.log(gen.next().value) // 6
console.log(gen.next().value) // 8
console.log(gen.next().value) // 10