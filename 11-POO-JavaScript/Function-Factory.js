const persona={
    nombre:"Alejandro",
    edad:47,
    isDeveloper:true,
    saludo: function (){
        console.log("Hello")
    }
}

const otra_persona = {
    nombre:"Gorka",
    edad: 34,
    isDeveloper: false,
    saludo: function(){
        console.log("Hello Gorka")
    }
}

// console.log(persona);
persona.saludo();
otra_persona.saludo();

// Función FACTORY
const creaPersona = (nombre,edad,isDeveloper)=>{
    return{
        nombre, // nombre: nombre,
        edad,   // edad: edad,
        isDeveloper, //isDeveloper: isDeveloper
        saludo: function(){
            console.log(`Hello ${nombre}`);
        }
    }
}

const nueva_persona = creaPersona ("Juan",23,true);
console.log(nueva_persona)

const nueva_persona2 = creaPersona ("Maria", 42 ,false)
console.log(nueva_persona2)
nueva_persona2.saludo();