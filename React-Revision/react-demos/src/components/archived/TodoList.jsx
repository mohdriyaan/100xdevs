import { useState } from "react"
export const TodoList = () => {
  const [todos, setTodo] = useState([])
  const [input, setInput] = useState("")

  function submitHandler(e){
    e.preventDefault()
    if(input.trim()){
      setTodo([...todos, input])
      setInput("")
    }
  } 

  function onChangeHandler(e){
    setInput(e.target.value)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter a new todo" value={input} onChange={onChangeHandler} />
        <button type="submit">Add a new Todo</button>
      </form>

      {todos.map((todo,index)=>{
        return(
          <div key={index}>
            <ul>
              <li>{todo}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}