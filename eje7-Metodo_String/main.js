let palabra = "aaaaeeeeeiiiiiiooooouuuu";
f1(palabra);
function f1(palabra) {
    palabra = palabra.replaceAll("a", "o");
    console.log(palabra);
}

f2("academia");
f2("escuela");
function f2(p){
    if(p.startsWith("aca")){
        console.log("Comienza por aca");
    }else{
        console.log("No comienza por aca");
    }
}

f3("Hola");
function f3(p) {
    console.log(p.repeat(3));
}