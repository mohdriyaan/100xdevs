// Printing even numbers
import readline from "readline-sync"

let range =  readline.questionInt("Enter the range you want the even numbers to be printed:- ")

for(let i = 1; i<= range; i++){
    if(i%2!=0){
        continue;
    }
    console.log(i)
}

