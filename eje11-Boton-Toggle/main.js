$(document).ready(function () {
    $("#rojo").on("click", function () {
        $("#texto").toggleClass("rojo");
    });
});

document.getElementById("azul").addEventListener("click",function() {
    var paragraphs = document.getElementById("texto")
    paragraphs.classList.toggle("azul");
});