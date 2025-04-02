// In JavaScript, hoisting is a behavior in which a function or a variable can be used before declaration.

// Hoisting with var
console.log(test)
var test = "hello"

//  Hoisting with let and const
// console.log(message);
// let message; // Gets error

// Function hoisting

// function call
greeting(); 

// function declaration
function greeting() {
  console.log("Welcome to Programiz.");
}

// Hoisting can cause undesirable outcomes in your program. So, it's best to avoid this practice.
// Hoisting can only happen when the function is declared but not when the function expression is used


