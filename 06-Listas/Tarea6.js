//TAREA 6

const listaCompra = ["Pan","Agua","Leche","Azucar","Sal"]

listaCompra.push("Aceite")
listaCompra.push("Girasol")
console.log(listaCompra) // ["Pan","Agua","Leche","Azucar","Sal", "Aceite", "Girasol"]
listaCompra.pop("Aceite")
listaCompra.pop("Girasol")
console.log(listaCompra) // ["Pan","Agua","Leche","Azucar","Sal"]

const pelisFavoritas = [
    {titulo: "El contador de cartas", director: "Paul Schrader", fecha : 2021},
    {titulo: "Lost in translation", director: "Sofia Coppola", fecha: 2003},
    {titulo: "Le llaman Bodhi", director: "Kathryn Bigelow", fecha: 1991},
];

const posteriores2010 = pelisFavoritas.filter(peli => peli.fecha > 2010)
console.log(posteriores2010)

const directoresPelis = pelisFavoritas.map( a => a.director )
console.log("Los directores son:", directoresPelis);

const titulosPelis = pelisFavoritas.map(t => t.titulo)
console.log("Titulos de pelis:" ,titulosPelis);

const listaConcatenada = directoresPelis.concat(titulosPelis)
console.log(listaConcatenada);

const listaPropagacion = [...directoresPelis,...titulosPelis]
console.log(listaPropagacion)