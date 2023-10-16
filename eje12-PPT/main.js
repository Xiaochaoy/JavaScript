$(document).ready(function () {
    let animacionEnCurso = false;
    let veces = 0;
    let stop;
    let final = 0;
    var imagenes = ["./imagen/piedra.png", "./imagen/papel.png", "./imagen/tijera.png"];
    var indice = 0; 
    let interval;
    let puntom = 0;
    let puntot = 0;

    alinicio();

    $("#piedra").on("click", function(){
        if (animacionEnCurso) {
            return;
        }
        animacionEnCurso = true;

        stop = Math.round(Math.random()* 10)+5;
        if(interval){
            clearInterval(interval);
        }
        interval = setInterval(cambiarImagen, 200);
        $("#mio").attr("src", $("#piedra").attr("src"));
    })
    $("#papel").on("click", function(){
        if (animacionEnCurso) {
            return;
        }
        animacionEnCurso = true;

        stop = Math.round(Math.random()* 10)+5;
        if(interval){
            clearInterval(interval);
        }
        interval = setInterval(cambiarImagen, 200);
        $("#mio").attr("src", $("#papel").attr("src"));
    })
    $("#tijera").on("click", function(){
        if (animacionEnCurso) {
            return;
        }
        animacionEnCurso = true;

        stop = Math.round(Math.random()* 10)+5;
        if(interval){
            clearInterval(interval);
        }
        interval = setInterval(cambiarImagen, 200);
        $("#mio").attr("src", $("#tijera").attr("src"));
    })

    function cambiarImagen() {
        if (veces < stop) {
            $("#suyo").attr("src", imagenes[indice]);
            indice = (indice + 1) % imagenes.length;
            veces++;
        } else {
            final = Math.round(Math.random() * imagenes.length);
            clearInterval(interval);
            $("#suyo").attr("src", imagenes[final]);
            alinicio();
            animacionEnCurso = false; 
            calcularPunto();
        }
    }

    function alinicio(){
        veces = 0;
        stop = 0;
        final = 0;
        indice = 0; 
    }

    function calcularPunto(){
        if ($("#mio").attr("src") === imagenes[0] && $("#suyo").attr("src") === imagenes[2] ||
            $("#mio").attr("src") === imagenes[1] && $("#suyo").attr("src") === imagenes[0] ||
            $("#mio").attr("src") === imagenes[2] && $("#suyo").attr("src") === imagenes[1]) {
            puntom++;
            $("#mp").text(puntom);
        }else if   ($("#mio").attr("src") === imagenes[0] && $("#suyo").attr("src") === imagenes[1] ||
                    $("#mio").attr("src") === imagenes[1] && $("#suyo").attr("src") === imagenes[2] ||
                    $("#mio").attr("src") === imagenes[2] && $("#suyo").attr("src") === imagenes[0]){
            puntot++;
            $("#sp").text(puntot);
        }else{}
    }
});