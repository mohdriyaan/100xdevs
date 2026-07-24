import { useContext } from "react"
import { UserContext } from "./UserContext"

export const UserProfile = () => {
  const {user} = useContext(UserContext)
  
  return <div>
    <h1>Name : {user.name}</h1>
  </div>
}

