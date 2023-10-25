"use strict";
let contenido = document.getElementById("contenido");
const botonNext = document.getElementById("next");
const categoriasDiv = document.getElementById("categorias");
let cate = "";
let selectedButton = null;
let loquebuscas = document.getElementById("search");
const botonbuscar = document.getElementById("buscar");
let tamaño = 0;
let busquedaactual = "";
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
fetch("https://api.chucknorris.io/jokes/categories")
    .then(response => response.json())
    .then(data => {
    data.forEach((categoria) => {
        const boton = document.createElement("button");
        boton.textContent = categoria;
        categoriasDiv.appendChild(boton);
        boton.addEventListener("click", () => {
            if (selectedButton) {
                selectedButton.classList.remove("select");
            }
            cate = categoria;
            boton.classList.add("select");
            selectedButton = boton;
        });
    });
})
    .catch(error => console.log('error:', error));
if (botonNext) {
    botonNext.addEventListener("click", function () {
        if (cate === "") {
            fetch("https://api.chucknorris.io/jokes/random", requestOptions)
                .then(response => response.json())
                .then(data => contenido.innerHTML = data.value)
                .catch(error => console.log('error', error));
        }
        else {
            fetch("https://api.chucknorris.io/jokes/random?category=" + cate, requestOptions)
                .then(response => response.json())
                .then(data => contenido.innerHTML = data.value)
                .catch(error => console.log('error', error));
        }
    });
}
if (botonbuscar) {
    botonbuscar.addEventListener("click", () => {
        if (loquebuscas.value !== "") {
            if (loquebuscas.value !== busquedaactual) {
                fetch("https://api.chucknorris.io/jokes/search?query=" + loquebuscas.value, requestOptions)
                    .then(response => {
                    if (!response.ok) {
                        contenido.innerHTML = "Bad request";
                    }
                    return response.json();
                })
                    .then(data => {
                    if (data.result && Array.isArray(data.result) && data.result.length > 0) {
                        if (tamaño < data.result.length) {
                            const chisteAleatorio = data.result[tamaño];
                            contenido.innerHTML = chisteAleatorio.value;
                            tamaño++;
                        }
                        else {
                            contenido.innerHTML = "Ya no hay mas";
                            tamaño = 0;
                            busquedaactual = loquebuscas.value;
                        }
                    }
                    else {
                        contenido.innerHTML = "No he encontrado nada";
                    }
                })
                    .catch(error => console.log('error', error));
            }
            else {
                contenido.innerHTML = "Te dije que ya no hay mas! CAMBIALO";
            }
        }
        else {
            contenido.innerHTML = "Pon algo no?";
        }
    });
}
