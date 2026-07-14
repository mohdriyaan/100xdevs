import { useState } from 'react'

let idCount = 4

function App() {
  const [todos,setTodos] = useState([
    {
      id : 1,
      title : "gym",
      description : "going to gym between 9-10" 
    },
    {
      id : 2,
      title : "work",
      description : "working at office between 9-5"
    },
    {
      id : 3,
      title : "gaming",
      description : "gaming till morning"
    }
  ])

  return (
    <>
      <CreateTodo todos={todos} setTodos={setTodos}/>
      <Todo todos={todos}></Todo>
    </>
  )
}

function Todo({todos}){
  return (
    <>
      {todos.map((todo)=>{
        return(
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
          </div>
        )
      })}
    </>
  )
}

// Adding key gives React a unique identifier to each list item , so between renders it can correctly identify items that are added, moved or updated making rendering more efficient and optimal. 

function CreateTodo({todos,setTodos}){

  function addNewTodo(){
   setTodos([...todos,{
      id : idCount++,
      title : "new todo",
      description : "new desc"
   }]) 
  }
  return (
    <button onClick={addNewTodo}>Add a new Todo</button>
  )  
}

export default App
