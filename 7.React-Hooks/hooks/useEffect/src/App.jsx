import { useState,useEffect } from 'react'
import axios from "axios"

function App() {
  const [id,setId] = useState(1)
  
  function onClickHandler(e){
    setId(parseInt(e.target.value))
  }

  return(
    <>
      <button value="1" onClick={onClickHandler}>1</button>
      <button value="2" onClick={onClickHandler}>2</button>
      <button value="3" onClick={onClickHandler}>3</button>
      <button value="4" onClick={()=>{setId(4)}}>4</button>
      <Todo id={id}/>
    </>
  )
}

function Todo({id}){
  const [todo,setTodo] = useState({})

  useEffect(()=>{
    setTimeout(()=>{
      axios.get(`http://localhost:8080/todo?id=${id}`)
      .then((res)=>{
        setTodo(res.data.todo)
      })
    },1000)
  },[id])

  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  )
  
}

export default App
