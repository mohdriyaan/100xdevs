import { useSelector } from "react-redux"

function CountValue() {
  const {count} = useSelector((state)=>state.counter)
  
  return (
    <div>
      <h1 className="text-4xl font-medium">{count}</h1>
    </div>
  )
}
export default CountValue