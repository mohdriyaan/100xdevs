import { useState } from 'react'
import { Counter } from './components/Counter'
import { Controls } from './components/Controls'
import { Statistics } from './components/Statistics'

function App() {
  const [count, setCount] = useState(0)
  const [click, setClick] = useState(0)
  return (
    <>
      <Counter count={count} /> <br />
      <Controls count={count} setCount={setCount} setClick={setClick}/>
      <Statistics count={count} click={click}/>
    </>
  )
}

export default App
