// Program to Check if a number is Positive, Negative, or Zero

function check(){
    let random = Math.floor(Math.random()*(-100-100)+100)
    if(random==0){
        return `The ${random} is zero`
    }else if(random<0){
        return `The ${random} is negative`        
    }else{
        return `The ${random} is positive`
    }
}

console.log(check())