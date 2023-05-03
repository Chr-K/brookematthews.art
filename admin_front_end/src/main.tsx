import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Login, Home,Edit_Shop} from './pages/barrel.tsx'
import './styles/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './globalContext/user.tsx'

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
  },
  {
    path:'/edit_shop',
    element:<Edit_Shop></Edit_Shop>
  }
]
}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <UserContextProvider>
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
  </UserContextProvider>
)
