// const arrayComida = ["🍔", "🌯", "🍣", "🍕", "🍜", "🥪", "🍙", "🍘", "🥩"];
// let pp = arrayComida.indexOf("🍕");
// arrayComida.fill("🍺", pp+1);
// console.log(arrayComida);

// const arrayComida2 = ["🍕", "🍕", "🍍", "🍕", "🍕"];
// console.log(arrayComida2.includes("🍍"));

// const arrayComida3false = ["🍕", "🍕", "🍍", "🍕", "🍕"];
// const arrayComida3true = arrayComida3false.filter(comida => {
//     return comida !== "🍍";
//   });
// console.log(arrayComida3true);

// const arrayComida4 = ["🍓", "🍋", "🍓", "🍋", "🍓"];
// arrayComida4.forEach((comida, index, array) => {
//     if(comida === "🍓"){
//         arrayComida4[index] = "🍄";
//     }
// });
// console.log(arrayComida4);

const arrayComida5 = ["🌶", "🥛", "🌶", "🥛", "🌶", "🥛"];
arrayComida5.forEach((comida, index, array) => {
    if(comida === "🌶"){
        arrayComida5.splice(index+1, 0, "🤡");
    }
});
console.log(arrayComida5);