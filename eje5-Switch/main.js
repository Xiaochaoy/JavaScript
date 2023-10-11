let mesnumber = 13;

switch (mesnumber) {
    case 1:
        console.log("enero");
        break;
    case 2:
        console.log("febrero");
        break;
    case 3:
        console.log("marzo");
        break;
    case 4:
        console.log("abril");
        break;
    case 5:
        console.log("mayo");
        break;
    case 6:
        console.log("junio");
        break;
    case 7:
        console.log("julio");
        break;
    case 8:
        console.log("agosto");
        break;
    case 9:
        console.log("septiembre");
        break;
    case 10:
        console.log("octubre");
        break;
    case 11:
        console.log("noviembre");
        break;
    case 12:
        console.log("disiembre");
        break;

    default:
        console.log("ERROR: Del 1 a 12 plz");
        break;
}

let numstring = "uno";
console.log(typeof numstring)
switch (numstring) {
    case "uno":
        numstring = 1;
        console.log(numstring + " -> " + typeof numstring)
        break;
    case "dos":
        numstring = 2;
        console.log(numstring + " -> " + typeof numstring)
        break;
    case "tres":
        numstring = 3;
        console.log(numstring + " -> " + typeof numstring)
        break;
    case "cuatro":
        numstring = 4;
        console.log(numstring + " -> " + typeof numstring)
        break;
    case "cinco":
        numstring = 5;
        console.log(numstring + " -> " + typeof numstring)
        break;
    default:
        console.log("ERROR: Del uno a cinco plz");
        break;
}