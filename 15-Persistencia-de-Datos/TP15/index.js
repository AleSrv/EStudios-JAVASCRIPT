const nom = "Alejandro"
const ape = "Fernandez"

const yo = {nombre: nom, apellido:ape}

sessionStorage.setItem("temporal",JSON.stringify(yo))
console.log(JSON.parse(sessionStorage.getItem("temporal")))

localStorage.setItem("local",JSON.stringify(yo))
console.log(JSON.parse(localStorage.getItem("local")))

document.cookie = `2minutos = ${JSON.stringify(yo)};max-age=120`
console.log(document.cookie)