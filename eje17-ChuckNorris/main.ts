import axios from 'axios';

let contenido = document.getElementById("contenido");
const boton = document.getElementById("next");

if(boton){
    boton.addEventListener("click", function(){
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(response => {
            const chiste = response.data.value;
            if(contenido){
                contenido.innerHTML = chiste;
            }
        })
        .catch(error => {
            console.error('Error al obtener el chiste:', error);
        });
    })
}