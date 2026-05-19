// JavaScript Program to Check if the Numbers Have Same Last Digit
function lastDigit(num1,num2,num3){
    if((num1%10)==(num2%10)&& (num1%10)==(num3%10) ){
        console.log("They are same")
    }else{
        console.log("Not same")
    }
}
lastDigit(10,10,10)
