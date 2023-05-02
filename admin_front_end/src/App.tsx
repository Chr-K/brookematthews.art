import { Outlet } from 'react-router-dom'
import './styles/App.css'
import './styles/text.css'
import './styles/inputs.css'
import './styles/buttons.css'
import {UserContextProvider,UserContext } from './globalContext/user'
import { useContext,useEffect } from 'react'
import Header from './pages/header'

function App() {
  const user = useContext(UserContext).user
  useEffect(()=>{
      if(user?.logged_in){
          window.location.href = 'https://admin.brookematthews.art/home'
      }
  },[user])
  return (
<UserContextProvider>
<Header></Header>
<div className='container'>
<Outlet></Outlet>
</div>
</UserContextProvider>
  )
}

export default App
