//Metodos nmas utilizados con strings

//Obtener Longitud // length

let str= "Hola soy un string"
console.log(str.length);   //18

//Obtener partes  de strings // slice() // substring() // substr()

let slice_str = str.slice(5,8);
console.log(slice_str); // soy

substring_str= str.substring(5,8)
console.log(substring_str); // soy

substr_str= str.substr(5,3) // el 3 es la longitud que queremos // deprecated ESTA OBSOLETA ESTA FUNCION!!!!! NO SE USA
console.log(substr_str); // soy

//Reemplazar parte de string // replace()

let cadena = "Hola mi nombre es Alejandro";
console.log(cadena); // Hola mi nombre es Alejandro
nueva_cadena = cadena.replace("Alejandro", "Laura");
console.log(nueva_cadena); // Hola mi nombre es Laura
console.log(cadena.replace("Alejandro", "Laura"));// Hola mi nombre es Laura

//Al usar la expresion global /g reemplaza todas las instancias

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."
console.log(texto_largo.replace(/Tito/g, "Juancito"))