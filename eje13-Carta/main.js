$(document).ready(function () {
    let cambiado = false;

    $("#primero").hover(function () {
        if(cambiado && $("#segundo").attr("src") === "./imagen/card-front.png"){
            $("#segundo").attr("src", "./imagen/card-back.png")
        }
        $(this).attr("src", "./imagen/card-front.png")
        cambiado = true;
    },
    function () {});

    $("#segundo").hover(function () {
        if(cambiado && $("#primero").attr("src") === "./imagen/card-front.png"){
            $("#primero").attr("src", "./imagen/card-back.png")
        }
        $(this).attr("src", "./imagen/card-front.png")
        cambiado = true;
    },
    function () {});
});