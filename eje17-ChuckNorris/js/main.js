"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
let contenido = document.getElementById("contenido");
const boton = document.getElementById("next");
if (boton) {
    boton.addEventListener("click", function () {
        axios_1.default.get('https://api.chucknorris.io/jokes/random')
            .then(response => {
            const chiste = response.data.value;
            if (contenido) {
                contenido.innerHTML = chiste;
            }
        })
            .catch(error => {
            console.error('Error al obtener el chiste:', error);
        });
    });
}
