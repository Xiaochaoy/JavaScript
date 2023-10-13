const arrayComida = ["🍔", "🌯", "🍣", "🍕", "🍜", "🥪", "🍙", "🍘", "🥩"];
let pp = arrayComida.indexOf("🍕");
arrayComida.fill("🍺", pp+1);
console.log(arrayComida);

const arrayComida2 = ["🍕", "🍕", "🍍", "🍕", "🍕"];
console.log(arrayComida2.includes("🍍"));

const arrayComida3false = ["🍕", "🍕", "🍍", "🍕", "🍕"];
const arrayComida3true = arrayComida3false.filter(comida => {
    return comida !== "🍍";
});
console.log(arrayComida3true);

const arrayComida4 = ["🍓", "🍋", "🍓", "🍋", "🍓"];
arrayComida4.forEach((comida, index, array) => {
    if(comida === "🍓"){
        arrayComida4[index] = "🍄";
    }
});
console.log(arrayComida4);

const arrayComida5false = ["🌶", "🥛", "🌶", "🥛", "🌶", "🥛"];
const arrayComida5true = [];
for (let index = 0; index < arrayComida5false.length; index++) {
    arrayComida5true.push(arrayComida5false[index]);
    if(arrayComida5false[index] == "🌶"){
        arrayComida5true.push("🤡");
    }
}
console.log(arrayComida5true);

const arrayCartafalse = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];
const arrayCartatrue = [];

for (let i = 0; i < arrayCartafalse.length; i++) {
    arrayCartatrue.push(arrayCartafalse[i]);
    if(arrayCartafalse[i] === "🎴" && arrayCartafalse[i+1] === "🎴"){
        arrayCartatrue.push("🃏");
    }
}
console.log(arrayCartatrue);