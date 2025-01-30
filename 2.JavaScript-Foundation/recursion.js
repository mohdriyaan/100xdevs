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



