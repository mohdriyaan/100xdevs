import { useState, memo, useCallback } from 'react'


function App() {
  const [count, setCount] = useState(0)
  
  const logSomething = useCallback(()=>{
    console.log("child clicked")
  },[]) // native function

  // react does not know that this is the same function as the last render and without useCallback when the parent renders the function also renders creating new functions which was not required.

  return (
    <div>
      <Child onClick={logSomething}/>
      <button onClick={()=>setCount(count+1)}>Counter ({count})</button>
    </div>
  )
}

const Child = memo(({onClick})=>{
  console.log("child render")

  return <div>
    <button onClick={onClick}>Button clicked</button>
  </div>
})

export default App
