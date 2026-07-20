import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil"
import { countAtom, evenSelector } from "./store/atoms/count"

function App() {

  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  )
}

function Count(){
  return(
    <>
      <CountRenderer />
      <Buttons />
      <IsEvenOdd />
    </>
  )
}

function CountRenderer(){
  const count = useRecoilValue(countAtom)
  return(
    <div>
      {count}
    </div>
  )
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={()=>{
      setCount(count=> count + 1)
    }}>Increment</button>
    <button onClick={()=>{
      setCount(count=> count - 1)
    }}>Decrement</button>
  </div>
}

function IsEvenOdd(){
  const count = useRecoilValue(countAtom)
  const isEven = useRecoilValue(evenSelector)

  return(
    <div>
      {isEven ? "It is even" : "It is odd"}
    </div>
  )

}

export default App
