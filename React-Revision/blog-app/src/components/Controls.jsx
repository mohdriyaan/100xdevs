import { useDispatch } from "react-redux"
import { decrement, increment } from "../redux/features/counterSlice"

function Controls() {

  const dispatch = useDispatch()
  
  return (
    <div className="flex gap-3 py-2">
      <button onClick={()=>{
        dispatch(increment())
      }} className="border-2 rounded px-2 py-4">Increment</button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>Decrement</button>
    </div>
  )
}
export default Controls