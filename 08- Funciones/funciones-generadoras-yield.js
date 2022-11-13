//FUNCIONES GENERADOREAS

//GENERAR ID INCREMENTAR

function* generaId(){
    let id=0;
    while(true){
        id++
        if (id===10){
            return id
        }
        yield id // Esperando hasta que vuelva a llamar
    }
}

const gen = generaId();

console.log(gen.next().value) //1
console.log(gen.next()) // { value: 2, done: false }
console.log(gen.next()) // { value: 3, done: false }
console.log(gen.next()) // { value: 4, done: false }
console.log(gen.next()) // { value: 5, done: false }
console.log(gen.next()) // { value: 6, done: false }
console.log(gen.next()) // { value: 7, done: false }
console.log(gen.next()) // { value: 8, done: false }
console.log(gen.next()) // { value: 9, done: false }
console.log(gen.next()) // { value: 10, done: true }

