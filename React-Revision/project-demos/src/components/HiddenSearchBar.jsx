import { useState } from "react"
import { FaSearch } from "react-icons/fa"

export const HiddenSearchBar = () => {
  const [hidden, setHidden] = useState(true)
  const [backgroundColor,setBackgroundcolor] = useState("white")
  const hiddenHandler = (e) => {
    if(e.target.className==="container"){
      setHidden(true)
      setBackgroundcolor("white")
    }
  }
  const clickHandler = () => {
    setHidden(false)
    setBackgroundcolor("black")
  }
  return (
    <section className="container" onClick={hiddenHandler} style={{backgroundColor}}>
      {hidden ? 
        <FaSearch onClick={clickHandler} />
       : <input placeholder="Search..."></input>}
    </section>
  )
}
export default HiddenSearchBar