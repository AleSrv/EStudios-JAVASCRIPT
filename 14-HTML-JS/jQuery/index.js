// $("selector").accion()
// class="el-1" => $(".el-1").hide()
// id="el-1" => $("#el-1").hide()
// $("h1").hide()

// $(document).ready(()=>{ // Mejor ejecutar cuando este cargado el documento
// }) o la FORMA SIMPLIFICADA:

$(()=>{
    // $("h1").hide()
    $(".hide-btn").click(()=>{
        console.log("Ocultando...")
        // $("h1").hide()
        $("h1").fadeOut()
    })

    $(".show-btn").click(()=>{
        console.log("Mostrando...")
        // $("h1").show()
        $("h1").fadeIn()
    })

    $("li").click(()=>{
        $("h1").css({color:"red"})
    })

    $(".new-element").click(()=>{
        $("ul").append("<li>Nuevo Elemento</li>")
        // $("ul").prepend("<li>Nuevo Elemento</li>") agrega al final
    })

    $("li").mouseenter((elem)=>{
        elem.target.style.color = "blue"
    })
    $("li").mouseleave((elem)=>{
        elem.target.style.color = "black"
    })
})
