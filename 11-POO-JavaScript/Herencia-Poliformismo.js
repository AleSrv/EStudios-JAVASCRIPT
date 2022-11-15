//INHERITANCE - HERENCIA 

class Persona {
    _nombre
    _edad
    constructor (nom,edad){
        this._nombre = nom
        this._edad = edad
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años.`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje){
        super(nombre,edad)          //     /    /    super()llama al constructor de su padre
        this.lenguaje = lenguaje
    }
    saludo(){ // Override
        super.saludo()
        console.log(`Soy Desarrollador de ${this.lenguaje} `)
    }
}

const nuevodev = new Desarrollador("Alexdev",44,"javaScript")
console.log(nuevodev)
nuevodev.saludo()

//POLIFORMISMO => podemos usar una funcion con distintas operaciones ej: desarrollador.saludo()