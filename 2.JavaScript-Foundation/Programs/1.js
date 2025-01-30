// Calculator
import readline from "readline-sync"

function calculator(){
let number1 = readline.questionInt("Enter the value1 :- ")
let number2 = readline.questionInt("Enter the value2 :- ")

let result

let op = readline.question("Enter the operator :- ")

switch(op){
    case "+":
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case "-":
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case "*":
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case "/":
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log("Invalid operator. Please enter the values again.");
        calculator()
}
}

calculator()