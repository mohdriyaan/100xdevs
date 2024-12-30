// Functions lets you
/*
1. Abstract out logic in your program.
2. Take arguments as an input
3. Returns a value as an output
4. You can think of them as an independent program that is supposed to do something given an input.
5. Functions can take other functions as input using callbacks.
*/

// Function to add two numbers
// function addSum(a,b){
//     return a+b;
// }

// const value = addSum(1,2)
// console.log(value)

function calculateArithmetic(a , b, arithmeticValue){
    return arithmeticValue(a,b)
}

function sum(a , b){
    return a + b
}

function minus(a, b){
    return a -b
}

const value1 = calculateArithmetic(100 , 15, sum)
console.log(value1)