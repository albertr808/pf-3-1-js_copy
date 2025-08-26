
export function addTwoNumbers(a,b){
  console.log(a+b)
  return a+b

}
//------------------------------programa2--------------------------------------------------------------------------------------------------------------
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

let operacion = prompt("¿Qué operación deseas realizar? (suma, resta, mult, div)");
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

switch (operacion) {
    case "suma":
        console.log("Resultado:", suma(num1, num2));
        break;
    case "resta":
        console.log("Resultado:", resta(num1, num2));
        break;
    case "mult":
        console.log("Resultado:", mult(num1, num2));
        break;
    case "div":
        console.log("Resultado:", div(num1, num2));
    default:
        console.log("Operación no válida");
}