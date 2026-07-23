import { useEffect, useState } from "react"

export const CounterEffect = () => {
  const [count, setCount] = useState(0) 
  
  useEffect(()=>{
    document.title = `Count ${count}` 
  },[count])

  return <div>
    <button onClick={()=>{
      setCount((prevCount) => prevCount + 1)
    }}>Increment</button>
  </div>

}