const botondo = document.getElementById("do");
const botonre = document.getElementById("re");
const botonmi = document.getElementById("mi");
const botonfa = document.getElementById("fa");
const botonso = document.getElementById("sol");
const botonla = document.getElementById("la");
const botonsi = document.getElementById("si");
const botondo2 = document.getElementById("do2");
const intro = document.getElementById("intro");
const botonm1 = document.getElementById("musica1");
const botonm2 = document.getElementById("musica2");
const foto = document.getElementById("foto") as HTMLImageElement;
var audio = document.getElementById("audio") as HTMLAudioElement;

const teclasYBotones: { [key: string]: { nota: number, boton: HTMLElement | null } } = {
    "a": { nota: 0, boton: botondo },
    "s": { nota: 1, boton: botonre },
    "d": { nota: 2, boton: botonmi },
    "f": { nota: 3, boton: botonfa },
    "j": { nota: 4, boton: botonso },
    "k": { nota: 5, boton: botonla },
    "l": { nota: 6, boton: botonsi },
    "ñ": { nota: 7, boton: botondo2 }
};
const audios: string[] = [  "audio/60.mp3",
                            "audio/61.mp3",
                            "audio/62.mp3",
                            "audio/63.mp3",
                            "audio/64.mp3",
                            "audio/65.mp3",
                            "audio/66.mp3",
                            "audio/67.mp3"];

if(intro && botonm1 && botonm2){
    for (const key in teclasYBotones) {
        if (teclasYBotones.hasOwnProperty(key)) {
            const { nota, boton } = teclasYBotones[key];
            if (boton) {
                boton.addEventListener("click", function() {
                    ruido(nota);
                });
            }
        }
    }
    document.addEventListener("keydown", function(event) {
        const key = event.key;
        if (teclasYBotones.hasOwnProperty(key)) {
            const { nota, boton } = teclasYBotones[key];
            ruido(nota);
            if (boton) {
                boton.classList.remove("style1");
                boton.classList.toggle("style2")
            }
        }
    });
    document.addEventListener("keyup", function(event) {
        const key = event.key;
        if (teclasYBotones.hasOwnProperty(key)) {
            const { boton } = teclasYBotones[key];
            if (boton) {
                boton.classList.remove("style2");
                boton.classList.toggle("style1")
            }
        }
    });
    intro.addEventListener("click", function (){
        foto.src = "fotito/noob.webp";
    });
    botonm1.addEventListener("click", function (){
        foto.src = "fotito/1.png";
    });
    botonm2.addEventListener("click", function (){
        foto.src = "fotito/2.png";
    });
}
function ruido(num: number) {
    const audionew = new Audio(audios[num]);
    audionew.play();
    setTimeout(() => {
        audionew.pause;
    }, 1000);
}