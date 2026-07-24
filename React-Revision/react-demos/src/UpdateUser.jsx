import { useContext, useState } from "react"
import { UserContext } from "./UserContext"

export const UpdateUser = () => {
  const [inputVal, setInputVal] = useState("")
  const {user, updateUser} = useContext(UserContext)

  const onChangeHandler = (e) => {
    setInputVal(e.target.value)  
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if(inputVal.trim()){
      updateUser(inputVal)
      setInputVal("")
    }
  }

  return <div>
    <form onSubmit={onSubmitHandler}>
      <input type="text" placeholder="Update User name" value={inputVal} onChange={onChangeHandler}/>
      <button type="submit">Submit</button>
    </form>
  </div>
} 