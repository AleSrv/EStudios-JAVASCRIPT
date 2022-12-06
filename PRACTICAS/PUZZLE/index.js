const piezas = document.querySelectorAll(".pieza")

piezas.forEach(pieza=>{
    pieza.addEventListener("dragstart",e=>{
        console.log("Arrastrando " + pieza.innerText )
        pieza.classList.add("dragging")
        e.dataTransfer.setData("id", pieza.id)
    })
    pieza.addEventListener("dragend",()=>{
        pieza.classList.remove("dragging")
    })
})

const secciones = document.querySelectorAll(".seccion")

secciones.forEach(seccion =>{                              
    seccion.addEventListener("dragover",event=>{
        event.preventDefault()
        console.log("DRAGOVER")
        event.dataTransfer.dropEffect = "move" 
    })
    seccion.addEventListener("drop",event=>{
        const id_pieza = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_pieza)
        seccion.appendChild(parrafo)
    })
})