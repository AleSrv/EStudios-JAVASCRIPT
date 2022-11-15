
class Estudiante {
    asignaturas = ["Javascript", "HTML", "CSS"]
    constructor (nombre,asignaturas){
        this.nombre = nombre
        this.asignaturas = asignaturas
    }
    obtenDatos (){
        console.log(`Nombre: ${this.nombre} asignaturas: ${this.asignaturas}`)
    }
}

const newEstudiante = new Estudiante ("Alex" , "C++")
newEstudiante.obtenDatos()
