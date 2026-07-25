import { useState } from "react"

export const Todo = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  const handleSubmit = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input.trim(), id: crypto.randomUUID() }])
      setInput("")
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit()
  }

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
        <div className="flex items-baseline justify-between pb-4">
          <h1 className="text-lg font-semibold text-slate-900">Todos</h1>
          {todos.length > 0 && (
            <span className="text-sm text-slate-400">{todos.length} left</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="New todo"
            value={input}
            className="h-10 flex-1 rounded-md border border-slate-200 px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
          />
          <button
            onClick={handleSubmit}
            className="h-10 shrink-0 rounded-md bg-slate-900 px-4 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            Add
          </button>
        </div>

        <ul className="mt-4 flex flex-col gap-2">
          {todos.length === 0 && (
            <li className="py-6 text-center text-sm text-slate-400">
              Nothing here yet.
            </li>
          )}

          {todos.map(({ text, id }) => (
            <li
              key={id}
              className="flex items-center justify-between rounded-md border border-slate-100 bg-slate-50 px-3 py-2"
            >
              <span className="text-sm text-slate-700">{text}</span>
              <button
                onClick={() => removeTodo(id)}
                aria-label="Remove todo"
                className="flex h-6 w-6 items-center justify-center rounded text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todo