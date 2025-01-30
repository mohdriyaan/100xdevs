//  Factorial of a number
import readline from "readline-sync"
function calculateFactorial(){
    let num = readline.questionInt("Enter the number: ")
    let fact = 1;
    for(let i=1; i<=num; i++){
        fact = fact * i
    }
    console.log(`The factorial of ${num} is ${fact}`)
}

calculateFactorial()