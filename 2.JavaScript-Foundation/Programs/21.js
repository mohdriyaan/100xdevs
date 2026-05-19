// JavaScript Program to Find the Sum of Natural Numbers

function sumN(num){
    // for loop
    /* let sum=0
    for(let i=0;i<=num;i++){
        sum+=i
    }
    console.log(sum)

    */
    // while loop
    let i = 0, sum=0
    while(i<=num){
        sum+=i
        i++
    }
    console.log(sum)

}


sumN(100)