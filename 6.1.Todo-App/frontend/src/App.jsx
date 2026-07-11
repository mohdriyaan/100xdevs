import { useState,useEffect } from 'react'
import { CreateTodo } from './components/CreateTodo.jsx'
import { Todos } from './components/Todos.jsx'

function App() {
  const [todos,setTodos] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/todos")
    .then(async(res)=>{
      const json = await res.json()
      setTodos(json.todos)
    })
    .catch((err)=>{
      console.log(err)
    })
  })
  

  return(
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
