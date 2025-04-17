// Program to Check Prime Number
function prime(num,isPrime=true){
    if(num==1){
        return(`${num} is neither prime or composite number.`)
    }else if(num>1){
        for(let i=2;i<num;i++){
            if(num%i==0){
                isPrime=false
                break;
            }
        }
    }
    if(isPrime){
        return(`${num} is prime`)
    }else{
        return(`${num} is not prime`)        
    }
}

console.log(prime(2))