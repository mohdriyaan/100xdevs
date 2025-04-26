// JavaScript Program to Find Armstrong Number in an Interval

function armstrongSeq(min,max){
    for(let i = min; i<=max ; i++){
        let numberDigits = i.toString().length
        let sum = 0
        let temp = i 
        while(temp>0){
            let remainder = temp % 10
            sum += remainder ** numberDigits
            temp = parseInt(temp/10) 
        }
        if(sum==i){
            console.log(i)
        }
    }
}

armstrongSeq(8,500)
