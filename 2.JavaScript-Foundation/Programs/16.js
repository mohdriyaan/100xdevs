// Program to print multiplication table
function multiply(num,range){
    for(let i=1;i<=range;i++){
        console.log(`${num} x ${i} = ${num*i}`)
    }
}

multiply(2,10)