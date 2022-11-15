class Persona {
    constructor (nombre,edad,isDeveloper){
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo(){
        console.log(`Hola mi nombre es ${this.nombre}, tengo edad: ${this.edad}`)
    }
}

const nueva_persona = new Persona("Alejandro", 47 , true)
console.log(nueva_persona) //Persona{"nombre: Alejandro",edad: 47 ,isDeveloper: true)
nueva_persona.saludo()

let numero = 60 // Inicializar
console.log(typeof numero)
let nueva_persona2 =new Persona("Maria",34,false) // Instanciar
console.log(typeof nueva_persona2)// object
console.log(nueva_persona2 instanceof Persona) // true
//instanceof -> igual a typeof pero para clases

