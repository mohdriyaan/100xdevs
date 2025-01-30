/*
In JavaScript, the scope of a variable determines where it can be accessed within the code.

Variables can be declared in different scopes:
1.Global Scope
2.Local (Function) Scope
3.Block-Level Scope
*/

// Local Scope
// function greet(){
//     let message = "Hi, how are you" // Local assigned variable
//     console.log(message) 
// }

// greet()

// console.log(message) Gives error because the variable message is declared inside the function of greet.

// Global Scope
// declare global variable
var message = "Hello";

function greet() {
    console.log(`Local: ${message}`);
}

greet();

console.log(`Global: ${message}`);

// If a variable is used without declaring it, that variable automatically becomes a global variable.

// Block Scope
// Block-level variables are accessible only within the block {} they are defined in, which can be smaller than a function's scope. For example,
function display_scopes() {
    // declare variable in local scope
    let message = "local";

    if (true) {

        // declare block-level variable
        let message = "block-level";

        console.log(`inner scope: ${message}`);
    }

    console.log(`outer scope: ${message}`);
}

display_scopes();