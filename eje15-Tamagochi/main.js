$($(document).ready(function () {
    const vidasn = [100,100,100,100,100];
    const vidasp = [$("#vida1"),$("#vida2"),$("#vida3"),$("#vida4"),$("#vida5")];
    const letra = ["Full", "Fun", "Strength", "Energy"];
    let cantidadVida;
    const intervalIds = [];
    const pollo =[];
    for (let index = 0; index < 4; index++) {
        intervalIds[index] = setInterval(function () {
            quitavidas(index, vidasp, vidasn);
        }, 2000);
    }
    quitavidap();
    
    function quitavidas(vidan, vidasp, vidasn) {
        if (vidasn[vidan] >= 0) {
            switch (vidan) {
                case 0:
                    if((vidasn[vidan] - 10) >= 0){
                        vidasn[vidan]-= 10;
                    }else{
                        vidasn[vidan] = 0;
                    }
                    break;
                case 1: 
                    if((vidasn[vidan] - 5) >= 0){
                        vidasn[vidan]-= 5;
                    }else{
                        vidasn[vidan] = 0;
                    }
                    break;
                case 2: 
                    if((vidasn[vidan] - 2) >= 0){
                        vidasn[vidan]-= 2;
                    }else{
                        vidasn[vidan] = 0;
                    }
                    break;
                case 3: 
                    if((vidasn[vidan] - 1) >= 0){
                        vidasn[vidan]--;
                    }else{
                        vidasn[vidan] = 0;
                    }
                    break;
                default:
                    break;
            }
            actualizar(vidan);
        } else {
            clearInterval(intervalIds[vidan]);
        }
    }
    function quitavidap() {
        vidasn[4] = (vidasn[0] + vidasn[1] + vidasn[2] + vidasn[3]) / 4;
        vidasp[4].css("width", vidasn[4] + "%");
        $("#l_" + vidasp[4].attr("id")).text(Math.floor(vidasn[4]) + "% HAPPYNESS");

        cantidadVida = (vidasn[4] / 10);
        let corazones = "♥".repeat(cantidadVida);
        if(cantidadVida > 0){
            for (let index = 0; index < cantidadVida; index++) {
                $("#icono_vida").text(corazones);
            }
        }else{
            $("#icono_vida").text(null);
            $("#nombre").hide();
            $("#personaje .vida").hide();
            $("#l_vida5").hide();
        }
        if(vidasn[4] === 0){
            $("#mascota").attr("src", "./imagen/pollococido.png");
            $("#mascota").css("width", "200px");
            $("#personaje").css("top", "40%");
        }else{
            $("#mascota").attr("src", "./imagen/animal.png");
            $("#personaje").css("top", "15%");
            $("#mascota").css({
                "width": "175px",
                "heigth": "279px"
            });

            $("#nombre").show();
            $("#personaje .vida").show();
            $("#l_vida5").show();
        }

        if(vidasn[4] <= 30){
            vidasp[4].css("background-color", "red");
        }else if(vidasn[4] < 75){
            vidasp[4].css("background-color", "yellow");
        }else{
            vidasp[4].css("background-color", "green");
        }
    }
    function actualizar(vidan){
        if(vidasn[vidan] <= 30){
            vidasp[vidan].css("background-color", "red");
        }else if(vidasn[vidan] < 75){
            vidasp[vidan].css("background-color", "yellow");
        }else{
            vidasp[vidan].css("background-color", "green");
        }
        vidasp[vidan].css("width", vidasn[vidan] + "%");
        $("#l_" + vidasp[vidan].attr("id")).text(vidasn[vidan] + "% " + letra[vidan]);
        quitavidap();
    }
    $("#helado").on("click", function() {
        if ((vidasn[0] + 4) <= 100){
            vidasn[0] = vidasn[0] + 4;
        }else{
            vidasn[0] = 100;
        }
        actualizar(0);
    })
    $("#pastanaga").on("click", function() {
        if ((vidasn[0] + 10) <= 100){
            vidasn[0] = vidasn[0] + 10;
        }else{
            vidasn[0] = 100;
        }
        actualizar(0);
    })
    $("#pollo").on("click", function() {
        if ((vidasn[0] + 20) <= 100){
            vidasn[0] = vidasn[0] + 20;
        }else{
            vidasn[0] = 100;
        }
        actualizar(0);
    })
    $("#playstation").on("click", function() {
        if ((vidasn[1] + 20) <= 100){
            vidasn[1] = vidasn[1] + 20;
        }else{
            vidasn[1] = 100;
        }
        actualizar(1);
    })
    $("#ruby").on("click", function() {
        if ((vidasn[1] + 10) <= 100){
            vidasn[1] = vidasn[1] + 10;
        }else{
            vidasn[1] = 100;
        }
        actualizar(1);
    })
    $("#ajedrez").on("click", function() {
        if ((vidasn[1] + 5) <= 100){
            vidasn[1] = vidasn[1] + 5;
        }else{
            vidasn[1] = 100;
        }
        actualizar(1);
    })
    $("#puño").on("click", function() {
        if ((vidasn[2] + 20) <= 100){
            vidasn[2] = vidasn[2] + 20;
        }else{
            vidasn[2] = 100;
        }
        actualizar(2);
    })
    $("#run").on("click", function() {
        if ((vidasn[2] + 10) <= 100){
            vidasn[2] = vidasn[2] + 10;
        }else{
            vidasn[2] = 100;
        }
        actualizar(2);
    })
    $("#dormir").on("click", function() {
        if ((vidasn[3] + 50) <= 100){
            vidasn[3] = vidasn[3] + 50;
        }else{
            vidasn[3] = 100;
        }
        actualizar(3);
    })
    $("#luna").on("click", function() {
        if ((vidasn[3] + 5) <= 100){
            vidasn[3] = vidasn[3] + 5;
        }else{
            vidasn[3] = 100;
        }
        actualizar(3);
    })
}))