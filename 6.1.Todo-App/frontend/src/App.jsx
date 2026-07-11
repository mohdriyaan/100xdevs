import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo.jsx'
import { Todos } from './components/Todos.jsx'

function App() {
  return(
    <div>
      <CreateTodo></CreateTodo>
      <Todos></Todos>
    </div>
  )
}

export default App
