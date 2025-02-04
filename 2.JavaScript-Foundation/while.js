// Display number from 1 to 3
// While loop
// let i=1

// while(i<=3){
//     console.log(i)
//     i++
// }

// For Loop
// for(let i=1;i<=3;i++){
//     console.log(i)
// }
import readline from "readline-sync"
let sum = 0
let num =0
while(num>=0){
    sum+=num
    num = readline.questionInt("Enter the number: ")   
}
console.log(`${sum}`)

