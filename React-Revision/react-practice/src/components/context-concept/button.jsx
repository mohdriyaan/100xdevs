import { useContext } from "react"
import { GlobalContext } from "../../context"

export const ContextButtonComponent = () => {
  const {changeTheme} = useContext(GlobalContext)
  
  return <button onClick={changeTheme}>
    change theme
  </button>
}