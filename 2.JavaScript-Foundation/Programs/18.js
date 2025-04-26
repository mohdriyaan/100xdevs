// JavaScript Program to Check Armstrong Number

function armstrong(num){
   let numDigits = num.toString().length 
   let sum = 0 
   let temp = num
   while(temp>0){
    let remainder = temp % 10
    sum+= remainder ** numDigits
    temp = parseInt(temp/10)
   }
   if(sum==num){
    console.log(`${num} is an armstrong number`)
   }else{
    console.log(`${num} is not an armstrong number`)    
   }
    
}

armstrong(153)