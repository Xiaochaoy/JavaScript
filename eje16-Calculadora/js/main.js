"use strict";
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
let operacion = false;
let calculado = false;
let acalcular = [];
let resultado = 0;
if (b0 && b1 && b2 && b3 && b4 && b5 && b6 && b7 && b8 && b9 && bdel && bmas && bmenos && bpunto && bbarra && bx && breset && bigual && mostrar) {
    b0.addEventListener("click", function () {
        cero(0);
        mostrar.innerHTML = numeroActual;
    });
    b1.addEventListener("click", function () {
        cero(1);
        mostrar.innerHTML = numeroActual;
    });
    b2.addEventListener("click", function () {
        cero(2);
        mostrar.innerHTML = numeroActual;
    });
    b3.addEventListener("click", function () {
        cero(3);
        mostrar.innerHTML = numeroActual;
    });
    b4.addEventListener("click", function () {
        cero(4);
        mostrar.innerHTML = numeroActual;
    });
    b5.addEventListener("click", function () {
        cero(5);
        mostrar.innerHTML = numeroActual;
    });
    b6.addEventListener("click", function () {
        cero(6);
        mostrar.innerHTML = numeroActual;
    });
    b7.addEventListener("click", function () {
        cero(7);
        mostrar.innerHTML = numeroActual;
    });
    b8.addEventListener("click", function () {
        cero(8);
        mostrar.innerHTML = numeroActual;
    });
    b9.addEventListener("click", function () {
        cero(9);
        mostrar.innerHTML = numeroActual;
    });
    bpunto.addEventListener("click", function () {
        if (decimal === false) {
            numeroActual += ".";
            decimal = true;
        }
        mostrar.innerHTML = numeroActual;
    });
    bdel.addEventListener("click", function () {
        if (numeroActual.length > 1) {
            numeroActual = numeroActual.slice(0, -1);
        }
        else {
            numeroActual = "0";
            acalcular = [];
            resultado = 0;
            operacion = false;
        }
        mostrar.innerHTML = numeroActual;
    });
    breset.addEventListener("click", function () {
        numeroActual = "0";
        acalcular = [];
        resultado = 0;
        mostrar.innerHTML = numeroActual;
        operacion = false;
    });
    bmas.addEventListener("click", function () {
        operacion = true;
        if (calculado) {
            acalcular = [];
            acalcular.push(resultado + "");
        }
        else {
            acalcular.push(numeroActual);
        }
        numeroActual = "0";
        mostrar.innerHTML = numeroActual;
    });
    bigual.addEventListener("click", function () {
        if (numeroActual != "0") {
            if (operacion) {
                acalcular.push(numeroActual);
                let cn = [];
                for (let index = 0; index < acalcular.length; index++) {
                    cn.push(parseInt(acalcular[index]));
                }
                for (let index = 0; index < acalcular.length;) {
                    if (index === 0) {
                        resultado = cn[index] + cn[index + 1];
                        index += 2;
                    }
                    else {
                        resultado += cn[index];
                        index++;
                    }
                }
                cn = [];
                calculado = true;
                mostrar.innerHTML = resultado + "";
            }
            else {
                mostrar.innerHTML = "No hay ninguna operacion !";
            }
        }
        else {
            mostrar.innerHTML = "Introduce algo no?";
        }
    });
    function cero(numero) {
        if (numeroActual === "0" || numeroActual === null) {
            numeroActual = numero + "";
        }
        else {
            if (numeroActual.length < 15) {
                numeroActual += numero;
            }
            else {
                return;
            }
        }
    }
}
