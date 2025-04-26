// JavaScript Program to Print the Fibonacci Sequence
function fibonacci(range){
    let n1= 0, n2= 1, nextTerm
    for(let i =1; i<=range;i++){
        console.log(n1)
        nextTerm=n1+n2
        n1 = n2
        n2 = nextTerm
    }
}

fibonacci(10)

// Fibonacci Sequence Up to a Certain Number
function fiboSeq(number){
    let n1= 0 , n2 =1 , nextTerm;
    nextTerm = n1+n2
    console.log(n1)
    console.log(n2)
    while(nextTerm<=number){ // 1
        console.log(nextTerm)
        n1=n2 // n1 = 1
        n2=nextTerm // n2 = 1
        nextTerm = n1+n2
    }
}

fiboSeq(13)