import { useState } from "react"
import { PopUpContent } from "./PopUpContent"

export const CopyInput = () => {
  const [inputVal, setInputVal] = useState("")
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(inputVal)
      .then(() => {
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
        }, 2000)
      })
  }

  return <div>
    <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
    <button onClick={handleCopy}>Copy</button>
    <PopUpContent copied={copied} />
  </div>
}
