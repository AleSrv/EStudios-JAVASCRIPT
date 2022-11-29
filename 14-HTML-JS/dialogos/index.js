// const boton = document.getElementById("#btn")
const boton = document.querySelector("#btn")

// console.log(boton)
boton.addEventListener("click",()=>{
    // console.log("Click")
    // alert("Se ha hecho CLICK")
    // confirm("Estas de Acuerdo?") && console.log("OK")

    //OPERADOR TERNARIO
    confirm("Estas de Acuerdo?")? console.log("OK") : console.log("NO!!!")

    const respuesta = confirm("Estas de Acuerdo?")
    if (respuesta){
        alert("Puede Continuar")
    }else{
        alert("Abortando operacion")
    }
})

const botonInfo = document.querySelector("#info")

botonInfo.addEventListener("click",()=>{
    const nombre = prompt("Cual es tu nombre")
    if(nombre){
        alert(`Bienvenido ${nombre}`)
    }else{
        console.log("ERROR");
    }
})

const lista=[{
    nombre: "Gorka",
    edad:34
},{
    nombre:"Julen",
    edad: 21
},{
    nombre:"Amaya",
    edad:30
}]

console.log(lista)
console.table(lista)