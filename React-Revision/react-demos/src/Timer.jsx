import { useState, useRef } from 'react';

export function Timer() {
  const [count, setCount] = useState(1)
  let timerId = useRef(null)

  
  function startTimer(){
    if(timerId.current!==null) return;
    timerId.current = setInterval(()=>{
      setCount((prevCount)=>prevCount+1)
    },1000)
  }

  function stopTimer(){
    clearInterval(timerId.current)
    timerId.current = null
  }

  return <div>
    <h1>Timer : {count}</h1>
    <button onClick={startTimer}>Start Timer</button>
    <button onClick={stopTimer}>Stop Timer</button>
  </div>
}