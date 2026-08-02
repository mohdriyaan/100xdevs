import { createContext, useState } from "react"

// create the context
export const GlobalContext = createContext(null)

// create the global state
function GlobalState({children}){
  const [theme,setTheme] = useState("light")

  function changeTheme(){
    setTheme(theme === "light" ? "dark" : "light")
  } 
  return <GlobalContext.Provider value={{theme,changeTheme}}>
    {children}
  </GlobalContext.Provider>
}

export default GlobalState