// Recursion is a programming technique where a function calls itself repeatedly to solve a problem. For example,

// Program to countdown till 1

function counter(num){

    console.log(num)

    if(num>1){
        num = num - 1
        counter(num)
    }else{
        return
        // terminates the execution
    }
}

counter(5)

// Factorial program using recursion

function factorial(num){
    if(num>1){
        return num * factorial(num - 1) 
    }else{
        return 1
    }
}

console.log(factorial(3))

// Does JS have recursion limit.
/* Yes, JavaScript does have a recursion limit.

The recursion limit prevents errors caused by too many nested function calls.

However, the limit varies depending on the JavaScript engine and the environment in which the code is running.

For instance, the maximum limit can differ between Firefox and Chrome. Whereas, devices with higher memory might have higher recursion 
limits than devices with less memory. */

// Infinte Recursion
/* When there is no base case in a recursive function, it runs infinitely, resulting in an infinite recursion. For example, */

function greet(){
    console.log("Hello")
    greet()
}

greet()
