//code -r abrir proyecto code limpio . reinicia la pantalla
//control + b --->> oculta/muestra navegador visual code
//https://runebook.dev/es/docs/dom/html_drag_and_drop_api
//draggable = true deja arrastrar elementos html
// https://runebook.dev/es/docs/dom/datatransfer
// DATATRANSFER El objeto DataTransfer se utiliza para contener (https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)
//los datos que se arrastran durante una operación de arrastrar y soltar. 
//Puede contener uno o más elementos de datos, cada uno de uno o más tipos de datos.
//event.dataTransfer.setData -> cuando se arrastra un objetoa<
//event.dataTransfer.getData -> cuando se solto un objeto

const parrafos = document.querySelectorAll(".parrafo") // "#" hace referencia a ID // "."hace referencia a la clase
console.log(parrafos)

parrafos.forEach(parrafo=>{
    //DRAGSTART
    parrafo.addEventListener("dragstart",event=>{ // Evento dragstart // console.log("estoy arrastrando el parrafo " + parrafo.innerText)
        parrafo.classList.add("moviendo") //agregamos una propiedad al parrafo mientras se mueve
        event.dataTransfer.setData("id",parrafo.id)  // guardar info de parrafo en cuestion
        const elemento_fantasma = document.querySelector(".imagen-fantasma") //poner imagen cuadrado rojo cuando arrastra
        event.dataTransfer.setDragImage(elemento_fantasma,0,0) // guardamos un formato a la imagen Drag
    })
    //DRAGEND
    parrafo.addEventListener("dragend",()=>{ // Evento dragend // console.log("fin arrastrando el parrafo " + parrafo.innerText)
        parrafo.classList.remove("moviendo") //eliminamos la propiedad ya que termina el dragend
    })
})

// SECCION//    /   /   /   /       /   //  /   /  /   /   /   /   /   //  /   /   
const secciones = document.querySelectorAll(".seccion")
const eliminar = document.querySelector(".papelera")

secciones.forEach(seccion =>{   
    //DRAGOVER                           
    seccion.addEventListener("dragover",event=>{
        event.preventDefault() // console.log("DRAGOVER")
        event.dataTransfer.dropEffect = "move" // puede ser move, copy (viene por defecto), link o none
    })
    //DROP
    seccion.addEventListener("drop",event=>{
        console.log("DROP")
        const id_parrafo = event.dataTransfer.getData("id")  // console.log("Parrafo id: " + id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
        console.log(parrafos)
    })
})


