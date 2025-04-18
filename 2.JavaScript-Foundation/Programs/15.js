// Program to Find the Factorial of a Number
function factorial(num){
    let fact =1 
    for(let i=num;i>0;i--){
        fact = fact * i
    }
    return fact
}

console.log(factorial(0))