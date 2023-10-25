const botondo = document.getElementById("do");
const botonre = document.getElementById("re");
const botonmi = document.getElementById("mi");
const botonfa = document.getElementById("fa");
const botonso = document.getElementById("sol");
const botonla = document.getElementById("la");
const botonsi = document.getElementById("si");
const botondo2 = document.getElementById("do2");
var audio = document.getElementById("audio") as HTMLAudioElement;
const audios: string[] = [  "audio/80.mp3",
                            "audio/81.mp3",
                            "audio/82.mp3",
                            "audio/83.mp3",
                            "audio/84.mp3",
                            "audio/85.mp3",
                            "audio/86.mp3",
                            "audio/87.mp3"];
const audios2: string[] = [  "audio/73.mp3",
                            "audio/74.mp3",
                            "audio/75.mp3",
                            "audio/76.mp3",
                            "audio/77.mp3",
                            "audio/78.mp3",
                            "audio/79.mp3",
                            "audio/80.mp3"];

if(botondo && botonre && botonmi && botonfa && botonso && botonla && botonsi && botondo2 && audio){
    botondo.addEventListener("click", function() {
        ruido(0);
    });
    botonre.addEventListener("click", function() {
        ruido(1);
    });
    botonmi.addEventListener("click", function() {
        ruido(2);
    });
    botonfa.addEventListener("click", function() {
        ruido(3);
    });
    botonso.addEventListener("click", function() {
        ruido(4);
    });
    botonla.addEventListener("click", function() {
        ruido(5);
    });
    botonsi.addEventListener("click", function() {
        ruido(6);
    });
    botondo2.addEventListener("click", function() {
        ruido(7);
    });
    document.addEventListener("keydown", function(event) {
        switch (event.key) {
            case "a":
                ruido(0);
                break;
            case "s":
                ruido(1);
                break;
            case "d":
                ruido(2);
                break;
            case "f":
                ruido(3);
                break;
            case "j":
                ruido(4);
                break;
            case "k":
                ruido(5);
                break;
            case "l":
                ruido(6);
                break;
            case "ñ":
                ruido(7);
                break;
        }
    });
}
function ruido(num: number) {
    const audionew = new Audio(audios[num]);
    audionew.play();
}