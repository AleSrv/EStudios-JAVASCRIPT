class Persona {
    //Prived -> # // SOLO SE PUEDE ACCEDER DESDE DENTRO DE LA CLASE
    //Protected -> _nombreMetodo o _nombreAtributo // SE ACCEDE DESDE CLASE Y CLASES DECENDIENTES
    #nombre
    #edad
    _isDeveloper = true
    constructor (nom,edad){
        this.#nombre = nom
        this.#edad = edad
    }

    saludo(){
        console.log(`Hola mi nombre es ${this.nombre}, tengo edad: ${this.edad}`)
    }
    obtenNombre(){ // GETTER -> NOS PERMITE ACCEDER DE FORMA CONTROLADA A ALGUN ATRIBUTO
        return this.#nombre
    }
    getEdad(){
        return this.#edad
    }
    // TAMBIEN SE PUEDEN HACER PRIVADOS LOS METODOS #obtenEdad por ejemplo pero no podriamos acceder desde fuera
    setEdad(nuevaEdad){
        this.#edad = nuevaEdad
        return this.#edad
    }
}

const persona1 = new Persona("Gorka", 70)
console.log(persona1.nombre)// undefined SOLO PODEMOS ACCEDER POR FUNCION SALUDO
console.log(persona1.edad)// undefined
persona1.saludo()
console.log(`Nombre: ` +persona1.obtenNombre() + `, Edad: ` + persona1.getEdad())// Nombre: Gorka, Edad: 70
console.log(persona1._isDeveloper) // SE SUPONE QUE NO SE PUEDE ACCEDER

//  /   /   /   /       /   GETTERS Y SETTERS   /   /   /   /   /       //  /   //      
//Getter -> NOS PERMITE OBTENER METODOS PRIVADOS O PROTEGIDOS
//Setter -> NOS PERMITE CAMBIAR EL VALOR DE ATRIBUTOS PRIVADOS O PROTEGIDOS

//Quiero Cambiar Edad setEdad()
persona1.setEdad(48)
console.log(persona1.getEdad())//48
const edad1 = persona1.getEdad()
console.log(edad1)//48

