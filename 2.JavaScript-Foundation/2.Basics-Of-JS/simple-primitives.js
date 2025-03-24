// Variables:- They are containers for storing information.
/* There are 3 ways to declare variables:-
    1) var
    2) let
    3) const
*/
// * Variables are case-sensitive.

let a = 1 // defined the variable
a = 2; // changed the value of the variable
console.log(a) // console. log is a built-in function that allows you to output messages or values to the console.

/* The common data types:-
    1) strings
    2) numbers
    3) boolean
*/
let firstName = "Riyaan"
let age = 23
let isSingle = true
console.log(`My name is ${firstName}. Age is ${age}`)

// if/else conditional statements
if (isSingle){
    console.log(`${firstName} is single`)
}else{
    console.log(`${firstName} is not single`)
    
}

// Loops
// Using loops you can iterate certain segment of the code again and again.
for(let i=0; i<=1000; i++){
    console.log(i)
}



