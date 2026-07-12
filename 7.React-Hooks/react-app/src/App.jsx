import { useState,memo } from "react"

function App() {
  let [title,setTitle] = useState("My name is Harry")
  
  // Am App is a component that is using the title state variable irrespective the child componenet uses or not because it has been declared inside the App component. So if setTitle is called the App componenet will get re rendered effectively rendering the child componenets as well 
  
  // You want to minimise the no of re renders to make a highly optimal react app.

  // We can push the state down to the child component (or) Use React.memo which lets you skip re-rendering when it's props are unchanged 

  function titleChange(){
    // let random = Math.random()
    // let splitTitle = title.split(" ")
    // splitTitle[3] = random
    // title = splitTitle.join(" ")
    // setTitle(title)
    
    // (or)

    setTitle("My name is " + Math.random())
  }

  return (
    <>
      <button onClick={titleChange}>Click me to change the title</button>
      <Header title={title}></Header>  
      <Header title=" Oscorp1"></Header>
      <Header title="Oscorp2"></Header>
      <Header title=" Oscorp3"></Header>
      <Header title="Oscorp4"></Header>
    </>
  )
}

// function HeaderwithButton(){

//   const [title,setTitle] = useState("My name is Harry")

//   function titleChange(){
//     setTitle("My name is " + Math.random())
//   }

//   return(
//     <>
//       <button onClick={titleChange}>Click me to change the title</button>
//       <Header title={title}></Header>
//     </>
//   )
// }

// 

const Header = memo(function Header({title}){
  console.log("Re rendered "+title)
  return (
    <div>{title}</div>
  )
})



export default App
