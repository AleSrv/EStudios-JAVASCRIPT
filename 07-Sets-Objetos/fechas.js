//  /   /   /   /   /   /   /    /  TRABAJANDO CON FECHAS  /   /   /   /   /   /   /   /   /   

// 4 formas 

const fecha = new Date()  // HOY
console.log(fecha) // fecha actual Sun Nov 06 2022 hora... 

//Atencion los meses inicializan en 0 = Enero ... 11 = Diciembre
const fecha2 = new Date(1987,10);  // FIJAR FECHA
console.log(fecha2) // Sun Nov 01 1987 00:00:00

const fecha3 = new Date(1000000000) // FECHA EN milisegundos DESDE 1970
console.log(fecha3) // Thu jan 01 1970 01

const fecha4 = new Date("October 13, 1979 12:15:15") // FECHA COMO UN STRING
console.log(fecha4)// Sat Oct 13 1979 12:15:15

///     /   /   /   /   /   /    COMPARAR FECHAS    /   /   /   /   /       /   /   /   /   

console.log(fecha > fecha3) // true
console.log(fecha2 === fecha3) // ERRRRRROOOOOOORRRRR NO SE COMPARA ASI
//HAY QUE CONVERTIR A MILISEGUNDOS

console.log(fecha2.getTime() === fecha3.getTime()) // ESTA SI ES LA FORMA DE COMPARAR FECHAS

//  /   /   /   /   /       /   /    OBTENER DIA , MES , AÑO /  /   /       /   /   /   /   /   /       

console.log(fecha2.getDate()); // DIA 1
console.log(fecha2.getMonth()+1) // MES 11
console.log(fecha2.getFullYear())// año 1987

const dia = fecha2.getDate();
const mes = fecha2.getMonth();
const anyo = fecha2.getFullYear();

console.log("La fecha de fecha2 es:",dia,"/",(mes+1),"/",anyo,".")

//  /       /   /   /       /   .toLocaleDateString        /   /   /   /   /       /   /   /   /   /       /   /   /   /       /   
// DEPENDE DE CADA ZONA 
// IDIOMAS : URL : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

console.log(fecha2.toLocaleDateString("en-GB")); // 1/11/1987 dia/mes/año


