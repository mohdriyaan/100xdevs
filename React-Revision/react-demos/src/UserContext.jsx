import {createContext, useState} from "react"

export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [user, setUser] = useState({
    name : "Riyaan"
  })

  const updateUser = (inputVal) => {
    setUser({
      name : inputVal
    })
  }

  return (
    <UserContext.Provider value = {{user,updateUser}}>
      {children}
    </UserContext.Provider>
  )
}