import { useState } from "react"
export function CreateTodo({todos,setTodos}){
  let [title,setTitle] = useState("")
  let [description,setDescription] = useState("")
  return (
    <div>
      <input type="text" placeholder="Title" onChange={(e)=>{
        const value = e.target.value
        setTitle(value)
      }}/> <br />
      <input type="text" placeholder="Description" onChange={(e)=>{
        const value = e.target.value
        setDescription(value)
      }}/> <br />
      <button onClick={()=>{
        setTodos([...todos,{
          title,
          description
        }])
      }}>Add Todo</button>
    </div>
  )
}