let seconds = 1

// function counter(timeout){
//   for(let i = seconds; i <= timeout; i++){
//     timerUpdate(i)
//   }
// }

// function timerUpdate(value){
//   setTimeout(()=>{
//     console.log(value)
//   },value*1000)
// }

function counter(timeout){
  setTimeout(()=>{
    if(timeout){
      console.log(seconds)
      seconds++
      counter(timeout-1)
    }
  },1000)
}

counter(3)

