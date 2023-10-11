const function1 = (uno , dos , tres) => {
    return uno + dos + tres;
}
console.log(function1(2,2,2));

const function2 = (nombre , apellido1 , apellido2) => {
    console.log(nombre + apellido1 + apellido2);
}
function2("xiao", "chao", "ying");

const function3 = (num1, num2) => {
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}
console.log(function3(4,3));