// tarea 07 fechas

const fecha = new Date;
const hoy = fecha.toLocaleDateString("en-GB")
console.log(hoy)// 6/11/2022

const mi_fecha = new Date(1975,07,17);
const nacimiento = mi_fecha.toLocaleDateString("en-GB")
console.log(nacimiento); // 17/08/1975

const comprobar = fecha.getTime() > mi_fecha.getTime();
console.log(comprobar) // true

const dia = mi_fecha.getDate();
const mes = mi_fecha.getMonth();
const anyo = mi_fecha.getFullYear();

console.log("Mi cumpleaños es el",dia,"/",(mes+1),"/",anyo,".")// Mi cumpleaños es el 17/08/1975.
