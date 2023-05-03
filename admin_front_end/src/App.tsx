import { Outlet } from 'react-router-dom'
import './styles/App.css'
import './styles/text.css'
import './styles/inputs.css'
import './styles/buttons.css'
import {UserContextProvider,UserContext } from './globalContext/user'
import Header from './pages/header'
import { useContext,useEffect } from 'react'

function App() {
const user = useContext(UserContext).user
useEffect(()=>{
  async function check_status(){
      if(!user?.logged_in && window.location.href!=='https://admin.brookematthews.art/'){
          window.location.href = 'https://admin.brookematthews.art/'
      }
  }
   check_status()

},[])
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
