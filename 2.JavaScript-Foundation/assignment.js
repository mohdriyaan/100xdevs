// Create a counter in JavaScrpt (counts down from 30 to 0)
// let i=30
// console.log("The counter starts now!!")
// let counterTimer= setInterval(counter,1000)
// function counter(){
//     if(i>=0){
//         console.log(i)
//         i--
//     }else{
//         console.log("The counter from 30 to 0 has been completed!!")
//         completed()
//     }
// }

// function completed(){
//     clearInterval(counterTimer)
// }

// Create a terminal clock
const time = new Date()
const minutes = time.getMinutes()
const hours = time.getHours()
const seconds = time.getSeconds()

function clock(){
    console.log(`${hours}:${minutes}:${seconds}`)
}

setInterval(clock,1000)


