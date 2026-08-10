import { useCounter } from "../store/useCounter"

function ManageCounter() {
  const {handleIncrement, handleDecrement} = useCounter((state)=>state)
  
  return (
    <div>
      <button onClick={handleIncrement} style={{background:"black", color:"white", fontWeight:"bolder"}}>
        Increment
      </button>

      <button onClick={handleDecrement} style={{background:"black", color:"white", fontWeight:"bolder"}}>
        Decrement
      </button>
    </div>
  )
}

export default ManageCounter