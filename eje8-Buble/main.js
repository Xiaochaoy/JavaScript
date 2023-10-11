for (let index = 0; index < 10; index++) {
    console.log(index + 1 + " I love code");
}


const arrays = ['a', 'b', 'c', 'd', 'e'];
arrays.forEach(element => {
    console.log(element);
});


let número = 5; 
for (; número >= 0; número--) {
    console.log(número);
}


let numero = 1;
let i = 0;
do{
    if(i === 0){
        i++;
        numero--;
        console.log(numero);
    }else{
        numero++;
        console.log(numero);
    }
}while (numero < 5);