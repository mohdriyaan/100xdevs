import { useState } from "react"

export const Switcher = () => {
  const [sw, setSw] = useState(false)

  return <div>
    {sw ? <span>Dark</span> : <span>Light</span> }

    <br />

    <input type="text" placeholder={sw ? "dark" : "light" }></input>
    
    <button onClick={()=> setSw((sw)=>!sw)}>Switch</button>
  </div>
}