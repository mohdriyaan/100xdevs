import { useContext } from "react"
import { GlobalContext } from "../../context"

export const ContextTextComponent = () => {
  const {theme} = useContext(GlobalContext)
  return <h1 style={{
    fontSize : theme==="light" ? "50px" : "100px", backgroundColor : theme==="light" ? "#ff1" : "#000", 
    color : theme==="light" ? "blue" : "yellow"  }}>
    Mr riyaan
  </h1>
}