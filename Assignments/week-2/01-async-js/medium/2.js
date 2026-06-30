function clock(){
  const date = new Date()
  const hrs = date.getHours()
  const mins = date.getMinutes()
  const seconds = date.getSeconds()
  const options = {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };
  const timeString = date.toLocaleTimeString("en-IN",options)
  // console.log(`${hrs}:${mins}:${seconds}`)  
  console.log(timeString)
}

setInterval(()=>{
  clock()
},1000)