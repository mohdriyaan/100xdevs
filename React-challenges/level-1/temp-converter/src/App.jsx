import { useState } from 'react'
import { Fahrenheit } from './components/Fahrenheit'
import { Kelvin } from './components/Kelvin'
import { Celsius } from './components/Celsius'

function App() {
  const [temp,setTemp] = useState("")
  return(
    <>
      <Celsius temp = {temp} setTemp = {setTemp}/>
      <Fahrenheit temp = {temp} setTemp = {setTemp}/>
      <Kelvin temp = {temp} setTemp = {setTemp}/>
    </>
  )
  
}

export default App
