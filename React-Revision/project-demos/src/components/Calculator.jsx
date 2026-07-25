import { useState } from "react"

export const Calculator = () => {
  const [inputValue, setInputValue] = useState("")

  const display = (value) => {
    setInputValue(inputValue + value)
  }

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setInputValue(String(eval(inputValue)))
    } catch {
      setInputValue("Error")
    }
  }

  const clear = () => {
    setInputValue("")
  }

  const operatorKeys = ["/", "*", "-", "+"]

  const buttons = [
    { label: "C", value: null, onClick: clear, span: "col-span-2 bg-rose-50 text-rose-600 hover:bg-rose-100" },
    { label: "/", value: "/", onClick: () => display("/") },
    { label: "*", value: "*", onClick: () => display("*") },
    { label: "7", value: "7", onClick: () => display("7") },
    { label: "8", value: "8", onClick: () => display("8") },
    { label: "9", value: "9", onClick: () => display("9") },
    { label: "-", value: "-", onClick: () => display("-") },
    { label: "4", value: "4", onClick: () => display("4") },
    { label: "5", value: "5", onClick: () => display("5") },
    { label: "6", value: "6", onClick: () => display("6") },
    { label: "+", value: "+", onClick: () => display("+") },
    { label: "1", value: "1", onClick: () => display("1") },
    { label: "2", value: "2", onClick: () => display("2") },
    { label: "3", value: "3", onClick: () => display("3") },
    { label: "=", value: null, onClick: calculate, span: "row-span-2 bg-slate-900 text-white hover:bg-slate-800" },
    { label: "0", value: "0", onClick: () => display("0") },
    { label: "00", value: "00", onClick: () => display("00") },
    { label: ".", value: ".", onClick: () => display(".") },
  ]

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-xs rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
        <input
          type="text"
          value={inputValue}
          readOnly
          placeholder="0"
          className="mb-4 h-16 w-full rounded-md bg-slate-50 px-4 text-right font-mono text-3xl text-slate-900 placeholder:text-slate-300 focus:outline-none"
        />

        <div className="grid grid-cols-4 gap-2">
          {buttons.map(({ label, value, onClick, span }) => (
            <button
              key={label + (value ?? "")}
              type="button"
              onClick={onClick}
              className={`h-14 rounded-md text-lg font-medium transition-colors ${
                span ?? (operatorKeys.includes(value)
                  ? "bg-amber-50 text-amber-600 hover:bg-amber-100"
                  : "bg-slate-100 text-slate-900 hover:bg-slate-200")
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calculator