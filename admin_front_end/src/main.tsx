import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Login, Home,Edit_Shop, OrderManagement, Messages} from './pages/barrel.tsx'
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
  },
  {
    path:'/order_management',
    element:<OrderManagement></OrderManagement>
  },
  {
    path:'/messages',
    element:<Messages></Messages>
  }
]
}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <UserContextProvider>
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
  </UserContextProvider>
)
