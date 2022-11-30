/* LOCALSTORAGE */

// localStorage.setItem("nombre","Alejandro")
// localStorage.setItem("nombre","Miguel")
localStorage.setItem("persona",JSON.stringify({nombre:"Nico", edad: 14}))

// console.log(localStorage.getItem("nombre"))
// console.log(JSON.parse(localStorage.getItem("persona")))

// JSON.stringify() CONVIERTE OBJETO/ARRAY EN STRING
// JSON.parse()     CONVIERTE UN OBJETO/ARRAY STRINGIFY A OBJETO JAVASCRIPT

localStorage.removeItem("nombre")
// console.log(localStorage.getItem("nombre"))//null

/* SESSIONSTORAGE */

sessionStorage.setItem("nombre-sesion","SesionAlex")

/* COOKIES */

document.cookie = "nombreCookie = AleCookie"
document.cookie = "nombreExpire = AleExpire; expires=" + new Date(2023, 0, 2).toUTCString() // 1 enero 2023

console.log(document.cookie)
