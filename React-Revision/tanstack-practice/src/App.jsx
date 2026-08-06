import { useState } from 'react'
import { useRoutes, Routes } from "react-router-dom"
import { ReactQueryDemo } from './components/react-query'

function CustomRoutes(){
  const element = useRoutes([
    {
      path : "/react-query-dom",
      element : <ReactQueryDemo />
    }
  ])
  return element
}
function App() {
  return (
    <div>
      <CustomRoutes />
    </div>
  )
}

export default App
