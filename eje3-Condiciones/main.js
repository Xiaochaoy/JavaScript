function lanzarMoneda() {
    var numeroAleatorio = Math.round(Math.random());
    if (numeroAleatorio == 1) {
        return "cara";
    } else {
        return "cruz";
    }
}

console.log(lanzarMoneda());
console.log(lanzarMoneda());