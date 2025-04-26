function armstrong(num){
    let sum=0
    let numLength = num.toString().length
    let temp = num
    while(temp>0){
        let remainder = temp%10
        sum+= remainder**numLength
        temp = parseInt(temp/10)
    }
    console.log(sum)
    if(sum==num){
        console.log(`${num} is a armstrong number `)
    }else{
        console.log(`${num} is not an armstrong number `)        
    }
}

// armstrong(153)

function armSeq(min,max){
    for(let i=min;i<=max;i++){
        let sum=0
        let temp=i
        let numDigits = i.toString().length
        while(temp>0){
            let remainder = temp%10
            sum+= remainder**numDigits
            temp = parseInt(temp/10)
        }
        if(sum==i){
            console.log(i)
        }
    }
}
armSeq(1,500)