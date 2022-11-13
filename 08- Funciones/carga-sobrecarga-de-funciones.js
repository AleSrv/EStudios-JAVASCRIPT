//CARGA Y SOBRECARGA DE FUNCIONES

function saludar (){
    hola()
}

function hola(){
    console.log("Hola! Soy la funcion Saludar")
}

saludar();

//PROCEDIMIENTOS DE CARGA
//1. global()
//2. saludar() global()
//3. hola() saludar() global()
//4 saludar() global()
//5. global()

//STACKOVERFLOW // SOBRECARGA DE FUNCIONES // FUNCIONES RECURSIVAS

// function recursivo(){
//     recursivo()
// }
// recursivo()