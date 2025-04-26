// avaScript Program to Make a Simple Calculator

function calculator(num1,num2,operand){
    switch(operand){
        case "+":{
            console.log(`${num1}+${num2}=${num1+num2}`)
            break
        }
        
        case "-":{
            console.log(`${num1}-${num2}=${num1-num2}`)
            break
        }
        case "*":{
            console.log(`${num1}*${num2}=${num1*num2}`)
            break
        }
        case "/":{
            console.log(`${num1}+${num2}=${num1/num2}`)
            break
        }
        case "%":{
            console.log(`${num1}%${num2}=${num1%num2}`)
            break
        }
        case "**":{
            console.log(`${num1}**${num2}=${num1**num2}`)
            break
        }
        default:{
            console.log("Invalid operator")
            break
        }
    }    
}

calculator(10,20,"**")