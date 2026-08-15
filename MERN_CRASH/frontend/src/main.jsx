import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import ProfilePage from './pages/ProfilePage.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<App />}>
      <Route index={true} path='/' element = {<HomePage />}/>
      <Route path='/login' element = {<LoginPage />}/>
      <Route path='/register' element = {<RegisterPage />}/>
      {/* Private Route */}
      <Route path = "" element = {<PrivateRoute />}>
        <Route path='/profile' element = {<ProfilePage />}/>
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
