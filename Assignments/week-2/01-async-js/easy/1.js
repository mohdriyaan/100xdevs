let seconds = 1

function counter(timeout){
    let intervalId = setInterval(()=>{
      console.log(seconds)
      if(seconds===timeout){
        clearInterval(intervalId)
      }
      seconds++
    },1000)
}  
counter(20)