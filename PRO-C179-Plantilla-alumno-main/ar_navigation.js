let coordiates = {}

$(document).ready (function (){
    get_coordinates();
})

function get_coordinates(){
    let searchParams = new URLSearchParams(window.location.search)
    if(searchParams.has('source')&& searchParams.has('desination')){
        let source = searchParams.get('source')
        let destination = searchParams.get('destination')
        coordiates.source_lat = source.split(";")[0]
        coordiates.source_lon = source.split(";")[1]
    }
    else{
        alert("¡Coordenadas no seleccionadas!")
        windws.history.back();
    }
}