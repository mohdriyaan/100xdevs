// Program to Find the Largest Among Three Numbers
function isLargest(num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log(`${num1} is largest`)
    }else if(num2>num1 && num2>num3){
        console.log(`${num2} is largest`)
    }else{
        console.log(`${num3} is largest`)
    }
}

isLargest(1008765678987678,1000000,1)
