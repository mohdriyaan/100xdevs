import { useState } from 'react'

// real wrapper

function App() {
  return (
    <>
      <CardWrapper>hi there</CardWrapper>
      <CardWrapper><TextComponent/></CardWrapper>
      <CardWrapper><TextComponent2/></CardWrapper>
      <CardWrapper>
        <CardWrapper>
          <CardWrapper>
            <TextComponent/>
          </CardWrapper>
        </CardWrapper>
      </CardWrapper>
    </>
    
  )
}

function TextComponent(){
  return <div>
      hi there
    </div>
}

function TextComponent2(){
  return <div>
    hello hola amigos
  </div>
}
// wrapper is writing the structure/outline of the card
function CardWrapper({children}){
  console.log(children)
  return (
    <div style={
      {
        border: "2px solid black",
        padding: "20px"
      }
    }>
      {children}
    </div>
  )
}

export default App
