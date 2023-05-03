import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Login, Home,Edit_Shop} from './pages/barrel.tsx'
import './styles/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useState} from 'react'

const [homePath,setHomePath] = useState(<Login></Login>)
useEffect(()=>{
  async function userStatus(){
    const response = fetch('https://api.brookematthews.art/get_admin_status',
    {credentials:'include'}
    )
    const data = await response.json()
    const status = await data.status
    if(status){
      setHomePath(<Home></Home>)
    }
    else{
      setHomePath(<Login></Login>)
    }

  }
  userStatus()
})


const router = createBrowserRouter([
{
path:'',
element:<App></App>,
children:[
  {
    path:'',
    element:homePath
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
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
