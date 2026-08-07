import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { increment,decrement, incrementByAmount, decreaseByAmount, reset } from "./redux/features/counterSlice"

const App = () => {
  const dispatch = useDispatch() // perform operation
  const count = useSelector((state)=>state.counter.value) // show value

  const [number, setNumber] = useState(null)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        dispatch(increment())
      }}>Increment</button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>Decrement</button>

      <input type="number" onChange={(e)=>setNumber(Number(e.target.value))}/>
      <button onClick={()=>{
        dispatch(incrementByAmount(number))
      }}>Increase by Amount</button>
      <button onClick={()=>{
        dispatch(decreaseByAmount(number))
      }}>Decrese By Amount</button>
      <button onClick={()=>{
        dispatch(reset())
      }}>Reset</button>
    </div>
    
  )
}
export default App