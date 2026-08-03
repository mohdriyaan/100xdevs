import { useState } from "react"
export const FormComponent = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const [formData, setFormData] = useState({
    name : "",
    email : ""
  })

  const handleInputChange = (e) => {
    setName(e.target.value)
  }
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleOnChange = (e) => {
    const {name, value} = e.target

    // here [name] is the computed property from the event, so when you type in name it gives and when you type in email it gives email value.

    setFormData({
      ...formData,
      [name] : value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData.name)
    console.log(formData.email)

    // call the api and the pass the name value
  }
  return <div>
    <h1>Form</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" 
      name="name" 
      id="name" 
      placeholder="Enter your name" 
      value={formData.name}
      onChange={handleOnChange} />
      <input type="email" 
      name="email" 
      id="email" 
      placeholder="Enter your email" 
      value={formData.email}
      onChange={handleOnChange} />
      <button type="submit">Submit</button>
    </form>
    
  </div>
}