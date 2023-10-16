$(document).ready(function () {
    const boton = $("#boton");
    const bombilla = $("#bombilla");
    var on = false;

    boton.on("click", function () {
        if(on){
            boton.attr("src", "./imagen/boff.jpg");
            bombilla.attr("src", "./imagen/off.jpg");
            on = false;
        }else{
            boton.attr("src", "./imagen/bon.jpg");
            bombilla.attr("src", "./imagen/on.jpg");
            on = true;
        }
    });

    $('#tamaño').on('input', function() {
        var valor = $(this).val();
        bombilla.css("height", valor + "vh");
    });

    $('#luminosidad').on('input', function() {
        var valor = $(this).val();
        bombilla.css("filter", 'brightness(' + valor + '%)');
    });

    $('#rotar').on('input', function() {
        var valor = $(this).val();
        bombilla.css({
            "transform": "rotate(" + valor + "deg)"});
    });
});