// Sum of positive number until number is negative
import readline from "readline-sync"

let sum =0
let num =0

function sumofPosNumbers(){
while(true){
    num = readline.questionInt("Enter the number: ")
    if(num>0){
        sum= sum + num
    }else if(num<0){
        console.log("You have entered Negative number!!")
        error()
        break;
    }
}
}

function error(){
    let err = readline.question("Do you want to continue: ")
    if(err=="Yes"){
        sumofPosNumbers()
    }else if(err=="No"){
        console.log(`The total sum of positive numbers is: ${sum}`)
    }
}

sumofPosNumbers()