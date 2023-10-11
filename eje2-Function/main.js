const funcion1 = () => {
    return "Xiaochao" + "Ying";
}
console.log(funcion1())

const funcion2 = (booleano) => {
    console.log(booleano);
}
funcion2(true);

const funcion3 = (...valores) => {
    valores.forEach(element => {
        console.log(element);
    });
}
funcion3(1, 2, 3, 4, 5);