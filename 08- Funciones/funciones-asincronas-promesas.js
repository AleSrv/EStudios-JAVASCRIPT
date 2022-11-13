//FUNCIONES ASINCRONAS Y PROMESAS

function miAsinc(){
    //llamada a base de datos externa
    //No sabemos cuanto puede demorar o tener error
}

// const miPromesa = new Promise((resolve, reject) => {
//     // Si esta ok 
//     if(true){
//         resolve()
//     }else{
//         reject()
//     }
// })

// miPromesa
//     .then(()=>console.log("Se ha ejecutado de forma correcta"))
//     .catch(()=>console.log("ERROR"))

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random()*2)
    if(i!==0){
        resolve()
    }else{
        reject()
    }
})

miPromesa
    .then(()=>console.log("Se ha ejecutado de forma correcta"))
    .catch(()=>console.log("ERROR"))
    .finally(()=>console.log("Yo me ejecuto siempre"))

//async await