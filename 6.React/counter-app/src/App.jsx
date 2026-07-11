import { useState } from "react"
// state, component

// react does not look at every variable as a state varibale. React says that if you want to define it in such a way that it keeps watching the state changes like useState.
// let state = {
//   count : 0
// }
// jsx

// if all the buttons needs to share the same state
function App() {
  let [count,setCount] = useState(0)
  // console.log(count) // state value , 0 initially
  // console.log(setCount) // fn

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <CustomButton count={count+1} setCount={setCount}></CustomButton>
      <CustomButton count={count-1} setCount={setCount}></CustomButton>
      <CustomButton count={count*100} setCount={setCount}></CustomButton>
    </div>
  )
}

// component
function CustomButton(props){
  function onClickHandler(){
    props.setCount(props.count+1)
  }
  
  return (
    <button onClick={onClickHandler}>
      Counter {props.count}
    </button>
  )
}

// if each button should have its own state independently
// function App() {
//   return (
//     <div>
//       <CustomButton></CustomButton>
//       <CustomButton></CustomButton> 
//     </div>
//   )
// }

// // component
// function CustomButton(){
//   const [count,setCount] = useState(0) 
  
//   function onClickHandler(){
//     setCount(count+1)
//   }
  
//   return (
//     <button onClick={onClickHandler}>
//       Counter {count}
//     </button>
//   )
// }

// {state variable}

export default App
