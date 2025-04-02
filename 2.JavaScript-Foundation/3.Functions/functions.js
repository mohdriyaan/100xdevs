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

function oddEven(num){
    if(num%2==0){
        return `${num} is even`
    }else{
        return `${num} is odd`
    }
}

console.log(oddEven(1))

// Checking if eleement is present in array

function isPresent(array,target){
    for(let i=0;i<=array.length-1;i++){
        if(target===array[i]){
            return `${target} found in array. Index number is ${i}`
        }
    }
    return `${target} Not found in array`
}


let array = [10,1,2,4,5]

console.log(isPresent(array,20))
