import { useRef } from "react"

export const FocusInput = () => {
  const inputElement = useRef(null)

  function focusFn(){
    inputElement.current.focus()
  }
  
  return <div>
    <input type="text" ref={inputElement} />
    <button onClick={()=>focusFn()}>Click</button>
  </div>
}

