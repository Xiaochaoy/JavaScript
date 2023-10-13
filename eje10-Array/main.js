$(document).ready(function() {
    const arrayrandom = ["🍋", "🍓", "🍄", "🍺", "🃏", "🥛", "🌶", "🤡", "🍍", "🥩", "🍘"];
    const arrayTrue = [];
    
    function actualizarValorMaximo() {
        $(".pos").attr("max", arrayTrue.length);
        $(".pos").attr("min", 0);
    }

    $("#push").on("click", function() {
        const numrandom = Math.floor(Math.random() * arrayrandom.length);
        arrayTrue.push(arrayrandom[numrandom]);
        $("#array").text(JSON.stringify(arrayTrue));
        actualizarValorMaximo();
    });

    $("#unshift").on("click", function() {
        const numrandom = Math.floor(Math.random() * arrayrandom.length);
        arrayTrue.unshift(arrayrandom[numrandom]);
        $("#array").text(JSON.stringify(arrayTrue));
        actualizarValorMaximo();
    })

    $("#insert").on("click", function(){
        const position = parseInt($("#position").val());
        if (position < 0 || position > arrayTrue.length) {
            $("#position").val(arrayTrue.length);
            alert("No existe esta posicion");
        }else{
            const numrandom = Math.floor(Math.random() * arrayrandom.length);
            arrayTrue.splice(position, 0, arrayrandom[numrandom]);
            $("#array").text(JSON.stringify(arrayTrue));
            actualizarValorMaximo();
        }
    })

    $("#pop").on("click", function() {
        const numrandom = Math.floor(Math.random() * arrayrandom.length);
        arrayTrue.pop(arrayrandom[numrandom]);
        $("#array").text(JSON.stringify(arrayTrue));
        actualizarValorMaximo();
    });
    $("#shift").on("click", function() {
        const numrandom = Math.floor(Math.random() * arrayrandom.length);
        arrayTrue.shift(arrayrandom[numrandom]);
        $("#array").text(JSON.stringify(arrayTrue));
        actualizarValorMaximo();
    });

    $("#remove").on("click", function(){
        const position = parseInt($("#position2").val());
        if (position < 0 || position >= arrayTrue.length) {
            if (position <= 0){
                $("#position2").val(arrayTrue.length);
                alert("Ya no hay nada");
            }else{
                $("#position2").val(arrayTrue.length-1);
                alert("No existe esta posicion");
            }
        } else {
            const numrandom = Math.floor(Math.random() * arrayrandom.length);
            arrayTrue.splice(position, 1);
            $("#array").text(JSON.stringify(arrayTrue));
            actualizarValorMaximo();
        }
    })
});