import { useState } from "react"

export function Controls({count, setCount, setClick}){
  const [stepInput, setStepInput] = useState(1)
  return (
    <>
      <Buttons count = {count} setCount = {setCount} stepInput={stepInput} setStepInput={setStepInput} setClick={setClick}/>
      <StepInput stepInput={stepInput} setStepInput= {setStepInput}/>
    </>
  )
}

function Buttons({count, setCount, stepInput, setStepInput, setClick}){
  return (
    <div>
      <button onClick={()=>{
        setCount((prevCount)=>prevCount - stepInput);
        setClick((prevClick) => prevClick + 1)
      }} disabled={(count<=0) ? true : false}>-</button>
      <button onClick={()=>{
        setCount((prevCount)=>prevCount + stepInput)
        setClick((prevClick) => prevClick + 1)
      }} disabled={(count>=100)? true : false}>+</button>
      <button onClick={()=>{
        setCount(0) 
        setStepInput(1)
        setClick(0)
      }}>Reset</button>
    </div>
  )
}

function StepInput({stepInput,setStepInput}){
  return (
    <div>
      <p>Step: <input type="text" style={
        {
          width : "50px"
        }
      } onChange={(e)=>{
        const val = parseInt(e.target.value)
        setStepInput(isNaN(val) ? 0 : val)
      }} value={stepInput || ""}></input></p>
    </div>
  )
}