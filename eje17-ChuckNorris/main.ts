let contenido = document.getElementById("contenido");
const botonNext = document.getElementById("next");
const categoriasDiv = document.getElementById("categorias");
let cate = "";
let selectedButton: HTMLButtonElement | null = null;
let loquebuscas = document.getElementById("search") as HTMLInputElement;
const botonbuscar = document.getElementById("buscar");

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://api.chucknorris.io/jokes/categories")
    .then(response => response.json())
    .then(data => {
        data.forEach((categoria: string) => {
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

if(botonNext){
    botonNext.addEventListener("click", function(){
        if(cate === ""){
            fetch("https://api.chucknorris.io/jokes/random", requestOptions)
            .then(response => response.json())
            .then(data => contenido.innerHTML = data.value)
            .catch(error => console.log('error', error));
        }else{
            fetch("https://api.chucknorris.io/jokes/random?category=" + cate, requestOptions)
            .then(response => response.json())
            .then(data => contenido.innerHTML = data.value)
            .catch(error => console.log('error', error));
        }
    })
}

if(botonbuscar && loquebuscas){
    const busqueda = encodeURIComponent(loquebuscas.value);

    botonbuscar.addEventListener("click", () =>{
        fetch("https://api.chucknorris.io/jokes/search?query=" + busqueda, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('请求失败'); // 在HTTP请求返回错误状态时抛出一个错误
            }
            return response.json();
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    })
}