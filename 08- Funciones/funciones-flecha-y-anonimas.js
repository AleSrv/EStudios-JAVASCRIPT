// FUNCIONES TIPO FLECHA // FUNCIONES ANONIMAS

const array = [1,5,6,2,7,12,8,92]

const array2 = array.map((valor)=> valor*2)

console.log(array2) // [2,10,12,4,14,24,16,184]

// const dobleDeValor = valor =>{
//     return valor *2;
// }

console.log(doble(6))//12
console.log(dobleDeValor(6)) //cannot acces dobleDeValor before initiali..!

const dobleDeValor = valor => valor *2
 
const array2 = array.map(dobleDeValor()) // AQUI SI SE PUEDE USAR DOBLEDEVALOR. YA ESTA INICIALIZADA
console.log(array2) // [2,10,12,4,14,24,16,184]

function doble(valor){
    return valor*2;
}
    


