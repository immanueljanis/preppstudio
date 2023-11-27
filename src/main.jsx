import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

// Import Pages
import App from './App.jsx'
import Home from './Pages/Home/Index'
import Register from './Pages/Register/Index'
import Login from './Pages/Login/Index'
import Product from './Pages/Product/Index'


const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/product/:id",
        element: <Product/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
