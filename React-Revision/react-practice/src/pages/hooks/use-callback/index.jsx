import { useCallback, useState } from "react"
import { Counter } from "./counter"
export const UseCallbackExample = () => {
  const [countOne, setCountOne] = useState(0) 
  const [countTwo, setCountTwo] = useState(0) 

  const memoriseCountOneFunc = useCallback(()=>{
    setCountOne(countOne+1)
  },[countOne])

  const memoriseCountTwoFunc = useCallback(()=>{
    setCountTwo(countTwo+1)
  },[countTwo])

  return (
    <div>
      <h1>Use Callback</h1>
      <Counter countValue={countOne} onClick={memoriseCountOneFunc}/>
      <Counter countValue={countTwo} onClick={memoriseCountTwoFunc}/>
    </div>
  )
}