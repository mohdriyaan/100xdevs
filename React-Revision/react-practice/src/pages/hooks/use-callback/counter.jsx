import { memo } from "react"

export const Counter = memo(({countValue, onClick}) => {
  console.log(`this is getting rendered ${countValue}`)
  return (
    <div>
      <p>{countValue}</p>
      <button onClick={onClick}>Click</button>
    </div>
  )
})
