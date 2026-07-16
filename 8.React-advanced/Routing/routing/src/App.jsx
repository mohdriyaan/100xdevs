import { lazy, Suspense } from 'react'
const Landing = lazy(()=> import("./components/Landing"))
const Dashboard = lazy(()=> import('./components/Dashboard'))  
import { BrowserRouter ,Routes, Route, useNavigate } from "react-router-dom"

function App() {
  // const navigate = useNavigate() // it always expects to be used in the router component

  // Suspense API
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={<p>Loading...</p>}><Dashboard/></Suspense>}></Route>
          <Route path="/" element={<Suspense fallback={<p>Loading...</p>}><Landing /></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate()
  return (    
    <div>
      <button onClick={() => navigate('/')}>Landing Page</button>
      <button onClick={() => navigate('/dashboard')}>Dashboard</button>
    </div>
  )
}

export default App
