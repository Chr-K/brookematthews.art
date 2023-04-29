import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Login, Home} from './pages/barrel.tsx'
import './styles/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
{
path:'',
element:<App></App>,
children:[
  {
    path:'',
    element:<Login></Login>
  },
  {
    path:'/home',
    element:<Home></Home>,
  }
]
}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
