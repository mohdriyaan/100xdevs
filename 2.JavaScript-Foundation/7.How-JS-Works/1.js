console.log(this)
console.log(window)  
console.log(firstName)
var firstName = "Riyaan"
console.log(firstName)

// In JS, the execution of code is as follows:- 
/*

1. Compile
ECMAScript does not say that the code does not need to be compiled. But mentions that early error checking needs to be done, 
determining appropriate scopes for the variables.
That is why the code needs to be compiled.

Compilation involes 3 phases:- 1) Tokenization/Lexing, 2) Parsing 3) Code Generation

In compilation, the entire code is tokenized/lexied into smaller chunks of code
Parsing coverts those chunks of code into Abstract syntax Tree (AST)
The AST makes / arranges the code in such a way that it is executable 

Error checking involves checking for syntatical errors.

The scoping of variables is determined based on the position where they are placed. The variales not declared in the function is executed in the global scope.

2. Code execute
In JS code executes inside execution context(Global execution context)

(1) Global Execution Context
It involves:-
i) Creation Phase
ii) Code Execution Phase

Let us follow what happens using the above code,
console.log(this) wil be the window object
console.log(window) will be the same as window object 
console.log(firstName)  will be declared undefined in the global execution context.
var firstName = "Riyaan" will be redefine the undefined variable to assingned variable
console.log(firstName) will print value of firstName variable   

Since JS is synchronous and single threaded, the code will be exdecuted line by line.

In case of let and const in plcae of var, the values will be uninitialized, so values will be only declared when the values are defined before 
execution.

Hoisting happens because the function is already stored in Global memory context, so when the code execution context begins,
when function is called , the function will be executed despite not in order of the code due to it being stored in the memory.

If then variables are uninitialized, then it is said to be under temporal dead zone.
*/