import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Home, Store} from './pages/pages_barrel.tsx'
import ErrorPage from './errorpage.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
const router = createBrowserRouter([{
  path:'',
  element:<App></App>,
  errorElement:<ErrorPage></ErrorPage>,
  children:[{
    path:'',
    element: <Home></Home>,
  },
{
  path:'/store',
  element:<Store></Store>
}]
}])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)