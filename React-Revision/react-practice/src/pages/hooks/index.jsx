import { useEffect, useRef } from "react"
export const Hooks = () => {
  const countValue = useRef(0)
  const divElement = useRef()
  const inputRefElement = useRef()
  

  function handleClick(){
    countValue.current = countValue.current + 1
    console.log(countValue.current)
  }

  useEffect(()=>{
    const getDivReference = divElement.current
    getDivReference.style.color = "red"

    setTimeout(()=>{
      getDivReference.style.color="green"
      setTimeout(()=>{
        getDivReference.style.color = "blue"
      },2000)
    },3000)

    inputRefElement.current.focus()
    
  },[])

  return (
    <div>
      <h1>Use ref, Use callback and useMemo Hooks</h1>
      <button onClick={handleClick}>Click me</button>
      <div ref={divElement}>Some random text</div>
      <input type="text" placeholder="Enter your name" ref={inputRefElement} ></input>
    </div>
  )
}