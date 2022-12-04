let marca1,marca2, map;

function initMap() {
    // console.log("Inicializando mapa")
    const tailandia = {lat: 7.998875440632191, lng: 98.29393318105222 }
    const newYork = {lat: 40.74876558983263, lgn: -73.98602918400358} 

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: tailandia
    })

    marca1 = new google.maps.Marker({
        position: tailandia,
        map,
        title: "Tailandia"
    })
    marca2 = new google.maps.Marker({
        position: newYork,
        map,
        title: "New York"
    })
}