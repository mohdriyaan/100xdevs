import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import axios from "axios"
import { TodosAtom, TitleAtom, DescriptionAtom, SearchAtom, FilteredTodos } from "./store/atoms/Todos"
import { useEffect } from "react"
import "./App.css"


function App() {
  return (
    <RecoilRoot>
      <Todo />
    </RecoilRoot>
  )
}

function Todo() {
  return (
    <div className="app-shell">
      <div className="app-card">
        <div className="app-header">
          <div>
            <p className="eyebrow">Recoil Todo App</p>
            <h1>Organize your day</h1>
          </div>
        </div>

        <div className="content-grid">
          <section className="panel form-panel">
            <SearchTodo />
            <TodoDetails />
            <Submit />
          </section>

          <section className="panel list-panel">
            <Todos />
          </section>
        </div>
      </div>
    </div>
  )
}

function SearchTodo() {
  const setSearchTodo = useSetRecoilState(SearchAtom)

  return (
    <div className="input-group">
      <label htmlFor="search">Search todos</label>
      <input id="search" placeholder="Type to filter" type="text" onChange={(e) => {
        setSearchTodo(e.target.value)
      }} />
    </div>
  )
}

function TodoDetails() {
  const setTitle = useSetRecoilState(TitleAtom)
  const setDescription = useSetRecoilState(DescriptionAtom)
  return (
    <div className="input-stack">
      <div className="input-group">
        <label htmlFor="title">Title</label>
        <input id="title" placeholder="Enter title" type="text" onChange={(e) => {
          setTitle(e.target.value)
        }} />
      </div>
      <div className="input-group">
        <label htmlFor="description">Description</label>
        <input id="description" placeholder="Enter description" type="text" onChange={(e) => {
          setDescription(e.target.value)
        }} />
      </div>
    </div>
  )
}

function Submit() {
  const setTodos = useSetRecoilState(TodosAtom)
  const title = useRecoilValue(TitleAtom)
  const description = useRecoilValue(DescriptionAtom)

  async function todoSubmit() {
    try {
      const response = await axios.post("http://localhost:3000/todo", {
        title,
        description
      })

      if (response.status === 200) {
        setTodos((prevTodos) => [...prevTodos, { title, description }])
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <button className="submit-btn" onClick={todoSubmit}>Add Todo</button>
  )
}

function Todos() {
  const setTodos = useSetRecoilState(TodosAtom)
  const filteredTodos = useRecoilValue(FilteredTodos)

  useEffect(() => {
    axios.get("http://localhost:3000/todos")
      .then((res) => {
        setTodos(res.data.todos)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="todo-list">
      {filteredTodos.length === 0 ? (
        <div className="empty-state">No todos match your search.</div>
      ) : filteredTodos.map((todo) => {
        return (
          <div className="todo-card" key={todo._id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
        )
      })}
    </div>
  )
}


export default App
