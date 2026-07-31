import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)

  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const decrementHandler = () => {
    setCount((prevCount) => prevCount - 1)
  }
  return (
    <div className="container">
      <div className="number">{count}</div>
      
      <div className="btns-container">
        <button onClick={incrementHandler} className="increment">+</button>
        <button onClick={decrementHandler} className="increment">-</button>
      </div>
    </div>  
  )
}