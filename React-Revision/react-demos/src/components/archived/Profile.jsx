import { useState } from "react";

export const Profile = () => {
  const [user, setUser] = useState({
    name : "",
    age : ""
  })
  const [nameInput, setNameInput] = useState("")
  const [ageInput, setAgeInput] = useState("")

  function onSubmitHandler(e){
    e.preventDefault()
    
    setUser({
      name : nameInput,
      age : ageInput
    })
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        
        <label>
          Name :
          <input type="text" value={nameInput} onChange={(e)=>setNameInput(e.target.value)} placeholder="Enter name"/>
        </label>
      
        <label>
          Age:
          <input type="text" value={ageInput} onChange={(e)=>setAgeInput(e.target.value)} placeholder="Enter age"/>
        </label>
        
        <button type="submit">Add the user</button>
      </form>

      <h3>Name : {user.name}</h3>
      <h3>Age : {user.age}</h3>
    </div>
  )
}


