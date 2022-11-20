class Persona {
    _nombre
    _edad
    _telefono
    constructor (nom,edad,tel){
        this._nombre = nom
        this._edad = edad
        this._telefono = tel
    }

    getNombre(){ 
        return this._nombre
    }
    getEdad(){
        return this._edad
    }
    getTelefono(){
        return this._telefono
    }
    setNombre(nuevoNom){
        this._nombre = nuevoNom
        return this._nombre
    }
    setEdad(nuevaEdad){
        this._edad = nuevaEdad
        return this._edad
    }
    setTel(nuevoTel){
        this._telefono = nuevoTel
        return this._telefono
    }
}

class Cliente extends Persona {
    constructor(nombre, edad, credito){
        super(nombre,edad)          //     /    /    super()llama al constructor de su padre
        this._credito = credito
    }
    getCredito(){                    // /   /   /   agregamos setter y getters nueva clase
        return this._credito
    }
    setCredito(newCredito){
        this._credito = newCredito
        return this._credito
    }
}

const nuevoCliente = new Cliente("juan Balatto", 34 , 15000)
console.log("Datos de Cliente: ")
console.log(nuevoCliente.getNombre())
console.log(nuevoCliente.getEdad())
console.log(nuevoCliente.getCredito())

class Trabajador extends Persona {
    constructor(nombre, edad, salario){
        super(nombre,edad)          //     /    /    super()llama al constructor de su padre
        this._salario = salario
    }
    getSalario(){                    // /   /   /   agregamos setter y getters nueva clase
        return this._salario
    }
    setSalario(salario){
        this._salario = salario
        return this._salario
    }
}

const nuevoTabajador = new Trabajador("Ale F", 47 , 4000)
console.log(nuevoTabajador.getSalario())