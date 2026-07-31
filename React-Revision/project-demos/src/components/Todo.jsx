import { useState } from "react"

export const Todo = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  
  const onChangeHandler = (e) => {
    setTodo(e.target.value)
  }
  
  const submitHandler = () => {
    setTodos([...todos,{
      id : Math.random() * 100,
      text : todo
    }])
    setTodo("")
  }

  const removeTodoHandler = (id) => {
   const updatedTodos = todos.filter((todo)=>{
    return todo.id !== id
   })
   setTodos(updatedTodos) 
  }
  
  return (
    <div className="container">
      <input type="text" placeholder="Enter Todo" onChange={onChangeHandler} value={todo} />
      <button onClick={submitHandler}>Submit</button>

      <div className="todos-list">
        {todos.map((todo)=>{
          return(
            <div key={todo.id} className="todo">
              {todo.text}
              <button onClick={()=>removeTodoHandler(todo.id)} className="close">X</button>
            </div>
          )
        })}
      </div>

    </div>
  )
}