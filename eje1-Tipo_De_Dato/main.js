let texto = "Hola";
let numeros = 123;
let booleano = true;
let vida = null;
let nada = undefined;
let simbolo = Symbol("aeingberh");
const objetos = {name: "wfn", apellido: "hibrt"};
const objetoArray = [1, "dos", 3];

const scoope = "global";
const funcion = function(){
    const scoope = "local";
    console.log(scoope);
}
funcion();
console.log(scoope);