function Fibonnaci(num){
    let i = 0
    let Resultado = [1]
    let numero = 1
    while ( i < (num-1)){
        Resultado.push(numero)
        numero = numero + Resultado[i]
        i++
    }
    return Resultado
}

Fibonnaci(6)
