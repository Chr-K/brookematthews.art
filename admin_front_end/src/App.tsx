import { Outlet } from 'react-router-dom'
import './styles/App.css'
import './styles/text.css'
import './styles/inputs.css'
import './styles/buttons.css'
import {UserContextProvider,UserContext } from './globalContext/user'
import Header from './pages/header'
import Login from './pages/login'
import { ReactNode, useContext,useEffect, useState } from 'react'

function App() {
const [user_status,setUser_status] = useState<ReactNode>()
const user = useContext(UserContext).user
useEffect(()=>{
  async function check_status(){
      if(!user?.logged_in){
        setUser_status(<Outlet></Outlet>)
      }
      else{
        setUser_status(<Login></Login>)
      }
  }
   check_status()

},[user?.logged_in])
  return (
<UserContextProvider>
<Header></Header>
<div className='container'>
  {user_status}
</div>
</UserContextProvider>
  )
}

export default App
