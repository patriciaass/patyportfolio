import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Works from './routes/Works.jsx'
import Contact from './routes/Contact.jsx'
import Skills from './routes/Skills.jsx'


const router = createBrowserRouter([
  {
    path:'/', element:<App/>,
    errorElement:<Error/>,

    children:[
      {path:'/', element:<Home/>},
      {path:'/about', element:<About/>},
      {path:'/skills', element:<Skills/>},
      {path:'/works', element:<Works/>},
      {path:'/contact', element:<Contact/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
