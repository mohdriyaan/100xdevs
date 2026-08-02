import { useState, useEffect } from "react"
import classes from "./style.module.css"
import { TodoItem } from "./components/todo-item"
import { TodoDetails } from "./components/todo-details"
import { Skeleton } from "@mui/material"
function App() {
  const [todoList, setTodoList] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [todoDetails, setTodoDetails] = useState(null)
  const [openDialog, setOpenDialog] = useState(false)

  async function fetchListOfTodos() {
    try {
      setLoading(true)
      const apiResponse = await fetch("http://dummyjson.com/todos")
      const result = await apiResponse.json()

      if (result?.todos && result?.todos.length > 0) {
        setTodoList(result?.todos)
        setLoading(false)
        setErrorMsg("")
      } else {
        setTodoList([])
        setLoading(false)
        setErrorMsg("")
      }

    } catch (error) {
      console.log(error)
      setErrorMsg("Some Error Occured")
    }
  }

  async function fetchDetailsOfCurrentTodo(getCurrentTodo) {
    try {
      const apiResponse = await fetch(`http://dummyjson.com/todos/${getCurrentTodo}`)
      const details = await apiResponse.json()

      if (details) {
        setTodoDetails(details)
        setOpenDialog(true)
      } else {
        setTodoDetails(null)
        setOpenDialog(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchListOfTodos()
  }, [])

  if (loading) return <Skeleton variant="rectangular" width={650} height={650} />

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.heroPanel}>
        <h1 className={classes.headerTitle}>Elegant Todo Dashboard</h1>
        <p className={classes.subTitle}>A refined, modern view of your tasks with a polished layout and smooth interactions.</p>
      </div>

      <div className={classes.todoListWrapper}>
        {todoList && todoList.length > 0 ?
          todoList.map((todo) =>
            <TodoItem todo={todo} fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo} />
          ) :
          null
        }
      </div>

      <TodoDetails
        openDialog={openDialog} todoDetails={todoDetails} setOpenDialog={setOpenDialog} setTodoDetails={setTodoDetails} />
    </div>
  )
}

export default App
