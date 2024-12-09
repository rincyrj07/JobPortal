import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import './App.css'
import Navbar from './components/shared/Navbar'
//import { Home } from 'lucide-react'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Search from './components/Search'
import Profile from './components/Profile'


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:"/jobs",
    element:<Jobs/>
  },
  {
    path:"/search",
    element:<Search/>
  },
  {
    path:"/profile",
    element:<Profile/>
  }
  
])


function App() {

  return (
    <>
      
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
