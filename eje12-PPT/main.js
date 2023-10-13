$(document).ready(function () {
    $("#piedra").on("click", function(){
        $("#mio").attr("src", $("#piedra").attr("src"));
    })
    $("#papel").on("click", function(){
        $("#mio").attr("src", $("#papel").attr("src"));
    })
    $("#tijera").on("click", function(){
        $("#mio").attr("src", $("#tijera").attr("src"));
    })

    
});