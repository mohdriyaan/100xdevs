import { RecoilRoot, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';
import { Suspense } from 'react';

function App() {
  return <RecoilRoot>
    {/* <Suspense fallback="loading..."> */}
      <Todo id={1}/>
      <Todo id={2} />
    {/* </Suspense> */}
  </RecoilRoot>
}

function Todo({id}) {
  // const todo = useRecoilValue(todosAtomFamily(id));
  const todo = useRecoilValueLoadable(todosAtomFamily(id));

  if(todo.state==="loading"){
    return (
      <div>Loading...</div>
    )
  } else if(todo.state==="hasValue"){
    return (
    <>
      <h1>{todo.contents.title}</h1>
      <p>{todo.contents.description}</p>
      <br />
    </>
  )
  }else if(todo.state==="hasError"){
    return (
      <>
        <div>Error From the Backend</div>
      </>
    )
  }
}

export default App