import { useEffect, useState, useMemo } from 'react'


function App() {
  const [counter, setCounter] = useState(0)
  const [text,setText] = useState(0)

  // let count = 0
  // for(let i = 1; i <= text ; i++){
  //   count += i
  // }
  // let [sum,setSum] = useState(0)

  // useEffect(()=>{
  //   for(let i = 1; i<=parseInt(text); i++){
  //     sum += i
  //   }
  //   setSum(sum)
  // },[text])

  let count = useMemo(()=>{
    let finalCount = 0
    for(let i = 0; i<=text; i++){
      finalCount += i
    }
    return finalCount
  },[text])

  return (
    <div>
      <input type="text" onChange={(e)=>{
        setText(e.target.value)
      }} />
      <p>Sum from 1 to {text} is {count}</p>
      <button onClick={()=>setCounter(counter+1)}>Counter ({counter})</button>
    </div>
  )
}

export default App
