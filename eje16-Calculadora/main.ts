const mostrar = document.getElementById("contenido");
const b0 = document.getElementById("b0");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const bdel = document.getElementById("bdel");
const bmas = document.getElementById("bmas");
const bmenos = document.getElementById("bmenos");
const bpunto = document.getElementById("bpunto");
const bbarra = document.getElementById("bbarra");
const bx = document.getElementById("bx");
const breset = document.getElementById("breset");
const bigual = document.getElementById("bigual");
let numeroActual = "0";
let decimal = false;
let calculado = false;
let acalcular: string[] = [];
let resultado: number = 0;
let cantidadDecimal = 0;
let dividir0 = false;
let multipli0 = false;

if(b0 && b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9 && bdel && bmas && bmenos && bpunto && bbarra && bx && breset && bigual && mostrar){
    b0.addEventListener("click", function(){
        cero(0);
        mostrar.innerHTML= numeroActual;
    });
    b1.addEventListener("click", function(){
        cero(1);
        mostrar.innerHTML= numeroActual;
    });
    b2.addEventListener("click", function(){
        cero(2);
        mostrar.innerHTML= numeroActual;
    });
    b3.addEventListener("click", function(){
        cero(3);
        mostrar.innerHTML= numeroActual;
    });
    b4.addEventListener("click", function(){
        cero(4);
        mostrar.innerHTML= numeroActual;
    });
    b5.addEventListener("click", function(){
        cero(5);
        mostrar.innerHTML= numeroActual;
    });
    b6.addEventListener("click", function(){
        cero(6);
        mostrar.innerHTML= numeroActual;
    });
    b7.addEventListener("click", function(){
        cero(7)
        mostrar.innerHTML= numeroActual;
    });
    b8.addEventListener("click", function(){
        cero(8);
        mostrar.innerHTML= numeroActual;
    });
    b9.addEventListener("click", function(){
        cero(9);
        mostrar.innerHTML= numeroActual;
    });
    bpunto.addEventListener("click", function(){
        if(decimal === false){
            numeroActual += ".";
            decimal = true;
        }
        mostrar.innerHTML= numeroActual;
    });
    bdel.addEventListener("click", function (){
        if(numeroActual.length > 1){
            numeroActual = numeroActual.slice(0, -1);
            mostrar.innerHTML= numeroActual;
        }else{
            numeroActual = "";
            acalcular = [];
            resultado= 0;
            cantidadDecimal= 0;
            mostrar.innerHTML= "0";
            dividir0 = false;
            multipli0 = false;
        }
        decimal = numeroActual.includes(".");
    });
    breset.addEventListener("click", function (){
        numeroActual = "";
        acalcular = [];
        resultado= 0;
        mostrar.innerHTML= "0";
        calculado = false;
        decimal = false;
        cantidadDecimal = 0;
        dividir0 = false;
        multipli0 = false;
    });
    bmas.addEventListener("click", function (){
        agregarOperacion("suma")
        mostrar.innerHTML= "0";
    });
    bmenos.addEventListener("click", function(){
        agregarOperacion("resta")
        mostrar.innerHTML= "0";
    });
    bx.addEventListener("click", function(){
        agregarOperacion("multiplicacion")
        mostrar.innerHTML= "0";
    });
    bbarra.addEventListener("click", function(){
        agregarOperacion("dividir")
        mostrar.innerHTML= "0";
    });
    bigual.addEventListener("click", function(){
        if(numeroActual != ""){
            acalcular.push(numeroActual);
            resultado = parseFloat(parseFloat(evaluarExpresion(acalcular)).toFixed(cantidadDecimal));
            calculado = true;
            mostrar.innerHTML= resultado+"";
            numeroActual = resultado+"";    
            decimal = numeroActual.includes(".");
        }else{
            mostrar.innerHTML= "Introduce algo no?";
        }
    });

    function agregarOperacion(operador: string) {
        if (calculado) {
            acalcular = [];
            calculado = false;
        }
        if(numeroActual !== "0"){
            acalcular.push(numeroActual);
            acalcular.push(operador);
        }
        numeroActual = "";
        decimal = false;
    }
    function cero(numero : number) {
        if(numeroActual === "0" || numeroActual === null){
            numeroActual = numero+"";
        }else{
            if (numeroActual.length < 15) {
                numeroActual += numero;
            }else{
                return;
            }
        }
    }
    function evaluarExpresion(expresion: string[]) {
        let operaciones = expresion.slice();
        const operadores = ["multiplicacion", "dividir", "suma", "resta"];
    
        for (let operador of operadores) {
            while (operaciones.includes(operador)) {
                const indice = operaciones.indexOf(operador);
                const numero1 = parseFloat(operaciones[indice - 1]);
                const numero2 = parseFloat(operaciones[indice + 1]);
                let resultados : number = 0;
                contarDigitosDecimal(numero1,numero2);
                switch (operador) {
                    case "multiplicacion":
                        if (numero2 === 0 || numero1 === 0) {
                            multipli0 = true;
                        }
                        resultados = numero1 * numero2;
                        break;
                    case "dividir":
                        if (numero2 === 0 || numero1 === 0) {
                            dividir0 = true;
                        }
                            resultados = numero1 / numero2;
                        break;
                    case "suma":
                        resultados = numero1 + numero2;
                        break;
                    case "resta":
                        resultados = numero1 - numero2;
                        break;
                }
                
                operaciones.splice(indice - 1, 3, resultados+"");
            }
        }
        
        return operaciones[0];
    }
    function contarDigitosDecimal(numero: number, numero2: number) {
        const cadenaNumero = numero.toString();
        const cadenaNumero2 = numero2.toString();
        const indicePuntoDecimal = cadenaNumero.indexOf(".");
        const indicePuntoDecimal2 = cadenaNumero2.indexOf(".");
        
        if (indicePuntoDecimal !== -1 || indicePuntoDecimal2 !== -1) {
            let n = cadenaNumero.length - indicePuntoDecimal - 1;
            let n2 = cadenaNumero2.length - indicePuntoDecimal2 - 1;
            if(cantidadDecimal === 0){
                if(n >= n2){
                    cantidadDecimal = n;
                }else{
                    cantidadDecimal = n2;
                }
            }else{
                if(n> cantidadDecimal){
                    cantidadDecimal= n;
                }else if(n2 > cantidadDecimal){
                    cantidadDecimal= n2;
                }
            }
        } else {
            cantidadDecimal= 0;
        }
    }
}
