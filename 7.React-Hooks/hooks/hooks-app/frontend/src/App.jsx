import { useEffect,useState } from 'react'

// Whenever the component is mounted (component mounting is the process where React creates a component for the first time and inserts it into the DOM.)

/*
When the app starts:

React calls App().
React sees <Greeting />.
React calls Greeting().
React creates the <h1>Hello World</h1> element.
React inserts it into the browser.

At this moment, Greeting has mounted.
*/

/* 
Every React component generally goes through three phases:
Mount -> Update -> Unmount

The most common way to detect mounting is:
useEffect(() => {
  console.log("Mounted");
}, []);

The empty dependency array [] means:

"Run this effect only once after the component mounts."

*/

function useTodos(){ // custom hooks
  const [todos,setTodos] = useState([])

  useEffect(()=>{
    setInterval(() => {
      fetch("http://localhost:8080/todos")
        .then(async(res)=>{
          const json = await res.json()
          setTodos(json.todos)
        })  
    }, 5000);
  },[])

  return todos

}

function App(){
  const todos = useTodos()

  return (
    <Todos todos={todos}></Todos>
  )

}

function Todos({todos}){
  
  return(
    <>
      {todos.map((todo)=>{
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h4>{todo.description}</h4>
            <h4>{todo.completed}</h4>
          </div>
        )
      })}
    </>
  )
}

export default App
