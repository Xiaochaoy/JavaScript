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
const next = document.getElementById("next");
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
let index = 0;
const nuevoElemento = document.createElement("p");
let end = false;
let select = false;
let puntos = 0;
mostrar(index);
for (const i in botones) {
    if (botones.hasOwnProperty(i)) {
        const boton = botones[i];
        boton.addEventListener("click", () => {
            seleccionado(Number(i), boton);
        });
    }
}
if (botonr) {
    botonr.addEventListener("click", function () {
        reiniciar();
    });
}
if (next) {
    next.addEventListener("click", function () {
        select = false;
        limpiar();
        clicable();
        if ((index + 1) < preguntas.length) {
            index++;
            select = false;
            mostrar(index);
        }
        else {
            next.style.display = "none";
            result();
        }
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
function seleccionado(cual, boton) {
    if (respuestas[index][cual] === rCorrectas[index]) {
        boton.style.backgroundColor = "green";
        if (!select) {
            select = true;
            puntos++;
        }
    }
    else {
        boton.style.backgroundColor = "red";
        const respuestaCorrectaIndex = respuestas[index].indexOf(rCorrectas[index]);
        if (respuestaCorrectaIndex !== -1) {
            botones[respuestaCorrectaIndex].style.backgroundColor = "green";
        }
        select = true;
    }
    clicable();
    if (select) {
        next.style.display = "inline";
    }
}
function result() {
    if (re) {
        re.insertBefore(re.appendChild(calcRe()), botonr);
    }
    showOno();
}
function calcRe() {
    nuevoElemento.textContent = "Your score: " + puntos;
    return nuevoElemento;
}
function clicable() {
    if (select) {
        boton1.disabled = true;
        boton2.disabled = true;
        boton3.disabled = true;
        boton4.disabled = true;
    }
    else {
        boton1.disabled = false;
        boton2.disabled = false;
        boton3.disabled = false;
        boton4.disabled = false;
    }
}
function reiniciar() {
    puntos = 0;
    showOno();
    mostrar(index);
}
function limpiar() {
    boton1.style.backgroundColor = "rgb(6, 151, 151)";
    boton2.style.backgroundColor = "rgb(6, 151, 151)";
    boton3.style.backgroundColor = "rgb(6, 151, 151)";
    boton4.style.backgroundColor = "rgb(6, 151, 151)";
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
