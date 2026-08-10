import { Routes, Route } from "react-router-dom"

import BlogApp from "./pages/BlogApp"
import Counter from "./pages/Counter"

function App() {
  return (
    <Routes>
      <Route path="/blog" element = {<BlogApp />}/>
      <Route path="/counter" element = {<Counter />}/>
    </Routes>
  )
  
}

export default App