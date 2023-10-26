"use strict";
const boton1 = document.getElementById("b1");
const boton2 = document.getElementById("b2");
const boton3 = document.getElementById("b3");
const boton4 = document.getElementById("b4");
const botonr = document.getElementById("br");
let pregunta = document.getElementById("pregunta");
let footer = document.getElementById("cantidad");
let re = document.getElementById("respuesta");
let cab = document.getElementById("cabeza");
const botones = {
    0: boton1,
    1: boton2,
    2: boton3,
    3: boton4
};
const preguntas = [
    "Cual de las siguientes opciones no es un editor de codigo?",
    "Que no hemos estudiado?",
    "Cuantas notas tiene un piano?"
];
const respuestas = [
    ["vim", "vscode", "emacs", "word"],
    ["java", "js", "css", "c+"],
    ["78", "68", "88", "98"]
];
const rCorrectas = ["word", "c+", "88"];
const rSeleccionadas = [];
let index = 0;
const nuevoElemento = document.createElement("p");
let end = false;
mostrar(index);
for (const i in botones) {
    if (botones.hasOwnProperty(i)) {
        const boton = botones[i];
        boton.addEventListener("click", () => {
            seleccionado(Number(i));
        });
    }
}
if (botonr) {
    botonr.addEventListener("click", function () {
        reiniciar();
    });
}
function mostrar(index) {
    if (pregunta) {
        pregunta.textContent = preguntas[index];
    }
    if (boton1 && boton2 && boton3 && boton4) {
        for (let i = 0; i < index + 1; i++) {
            for (let j = 0; j < respuestas[i].length; j++) {
                if (j === 0) {
                    boton1.textContent = respuestas[i][j];
                }
                else if (j === 1) {
                    boton2.textContent = respuestas[i][j];
                }
                else if (j === 2) {
                    boton3.textContent = respuestas[i][j];
                }
                else if (j === 3) {
                    boton4.textContent = respuestas[i][j];
                }
            }
        }
    }
    if (footer) {
        footer.textContent = "Question " + (index + 1) + " of " + preguntas.length;
    }
}
function seleccionado(cual) {
    rSeleccionadas[index] = respuestas[index][cual];
    if ((index + 1) < preguntas.length) {
        index++;
        mostrar(index);
    }
    else {
        result();
    }
}
function result() {
    if (re) {
        re.insertBefore(re.appendChild(calcRe()), botonr);
    }
    showOno();
}
function calcRe() {
    let puntos = 0;
    for (let i = 0; i < rCorrectas.length; i++) {
        if (rCorrectas[i] === rSeleccionadas[i]) {
            puntos++;
        }
    }
    nuevoElemento.textContent = "Your score: " + puntos;
    return nuevoElemento;
}
function reiniciar() {
    showOno();
    mostrar(index);
}
function showOno() {
    if (cab && pregunta && boton1 && boton2 && boton3 && boton4 && botonr && re && footer) {
        if (!end) {
            cab.textContent = "Result";
            pregunta.style.display = "none";
            boton1.style.display = "none";
            boton2.style.display = "none";
            boton3.style.display = "none";
            boton4.style.display = "none";
            footer.style.display = "none";
            botonr.style.display = "inline";
            re.style.fontSize = "1.5em";
            re.style.textAlign = "center";
            re.style.marginTop = "20px";
            re.parentElement.parentElement.style.marginTop = "200px";
            end = true;
        }
        else {
            cab.textContent = "Quiz";
            index = 0;
            pregunta.style.display = "block";
            boton1.style.display = "block";
            boton2.style.display = "block";
            boton3.style.display = "block";
            boton4.style.display = "block";
            footer.style.display = "block";
            botonr.style.display = "none";
            re.style.fontSize = "1em";
            re.style.marginTop = "0px";
            re.removeChild(nuevoElemento);
            re.parentElement.parentElement.style.marginTop = "0px";
            end = false;
        }
    }
}
