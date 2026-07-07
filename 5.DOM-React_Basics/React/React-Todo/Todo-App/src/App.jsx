import { useState } from 'react'
import './App.css'

// dynamic websites
// when you have to create a dynamic website,
// you write a lot of JS code that does DOM manipulation.
function App() {
  let [count,setCount] = useState(0)
  
  return (
    <button onClick={()=>{
      setCount(count+1)
    }}>
        count is {count}
    </button>
  )
}

export default App
