//  FUNCIONES: QUE SON , COMO SE DECLARAN, COMO SE UTILIZAN

const nom = "Ale"

saludar(nom);


function saludar(nombre){
    console.log(`Hola ${nombre}`)// Hola Ale
}

//  /       /   /       /   /   /   /   
let nombre2= "Juan";
console.log(nombre2)// Juan
despedir(nombre2)
console.log(nombre2)//Juan

function despedir (nombre){
    nombre = "Diego"
    console.log(`Adios ${nombre}`)//Adios Diego
}

///     /   /   /   /   /           /   /     objeto en funciones   /   //  /       /   /   /   /

let persona = {nombre: "Juan" , apellido: "Gonzalez"}

saludar_persona(persona)
console.log(persona)// {nombre: "Juan" , apellido: "Villar"}

function saludar_persona (objeto){
    objeto.apellido = "Villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`) // Hola Juan Villar
}

// saludar_persona() no tiene parametro da error
saludar()

//  /   /   /   /   // PARAMETRO POR DEFECTO (SE DEFINE EN LA FUNCION)/   /   /   /   /   

function imprimeNumero (numero = 7){ 
    console.log(numero);
}
imprimeNumero()

//  /   /   /   /   /   /       //  /    funcion de EXPANCION EN PARAMETROS   /   /   /   /   /   /   /   /   //  /       /   /   /       /   /   /   

function imprimir(...parametros){
    console.log(parametros)
}

imprimir (1,3,"hola", {id:4});

//

function suma(...nums){
    return(nums.reduce((a,b)=>a+b))
}

const s= suma(1,2,5,9,7)
console.log(s)// 24

//  /   /   /   /   /   /   AMBITO DE UNA FUNCION   /   /   /   /   /   /   

let variable="hola"

function multiplicar(a=0 , b=0){
    console.log(variable)// hola
    let variable_interna =  "adios"
    console.log(variable_interna) 
    return a*b
}

console.log(variable_interna) // no definida fuera de la funcion no accesible

console.log(multiplicar(4,9))//36