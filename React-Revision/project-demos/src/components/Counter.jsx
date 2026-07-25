import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => prev - 1)
  const reset = () => setCount(0)

  const countColor =
    count > 0 ? "text-emerald-600" : count < 0 ? "text-rose-600" : "text-slate-900"

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-xs rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
        <div className="flex flex-col items-center gap-8 py-4">
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm font-medium text-slate-500">Count</span>
            <span
              className={`font-mono text-6xl font-semibold tabular-nums tracking-tight transition-colors ${countColor}`}
            >
              {count}
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <button
              onClick={decrement}
              className="h-12 flex-1 rounded-md border border-rose-200 text-lg font-medium text-rose-600 transition-colors hover:bg-rose-50 hover:text-rose-700"
            >
              −
            </button>

            <button
              onClick={reset}
              disabled={count === 0}
              className="h-12 w-12 shrink-0 rounded-md text-sm text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 disabled:pointer-events-none disabled:opacity-40"
            >
              ↺
            </button>

            <button
              onClick={increment}
              className="h-12 flex-1 rounded-md border border-emerald-200 text-lg font-medium text-emerald-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter