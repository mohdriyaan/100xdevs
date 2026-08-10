import { useCounter } from "../store/useCounter"
export const CounterValue = () => {
  const {count} = useCounter((state)=>state)
  return (
    <div>
      Counter value is {count}
    </div>
  ) 
}