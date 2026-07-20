import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';
import { useEffect } from 'react';

function App() {
  return <RecoilRoot>
    <UpdaterComponent />
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
  </RecoilRoot>
}

function UpdaterComponent(){
  const updateTodo = useSetRecoilState(todosAtomFamily(2))

  useEffect(()=>{
    setTimeout(()=>{
      updateTodo({
        title : "new todo",
        description : "new desc"
      })
    },5000)
  },[])
}


function Todo({id}) {
  const todo = useRecoilValue(todosAtomFamily(id));
  return (
    <>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </>
  )
}

export default App