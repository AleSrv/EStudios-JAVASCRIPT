class Persona {
    #nombre
    #edad
    #telefono
    constructor (nom,edad,tel){
        this.#nombre = nom
        this.#edad = edad
        this.#telefono = tel
    }

    getNombre(){ 
        return this.#nombre
    }
    getEdad(){
        return this.#edad
    }
    getTelefono(){
        return this.#telefono
    }
    setNombre(nuevoNom){
        this.#nombre = nuevoNom
        return this.#nombre
    }
    setEdad(nuevaEdad){
        this.#edad = nuevaEdad
        return this.#edad
    }
    setTel(nuevoTel){
        this.#telefono = nuevoTel
        return this.#telefono
    }
}

const nuevaPersona = new Persona();
const elNombre = nuevaPersona.setNombre("Alex")
const laEdad =  nuevaPersona.setEdad(44)
const elTelefono = nuevaPersona.setTel(666777888)

console.log(`La persona nueva es ${elNombre}, con edad de ${laEdad} y tel: ${elTelefono}`)
