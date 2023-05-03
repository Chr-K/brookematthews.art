import { Outlet, redirect } from 'react-router-dom'
import './styles/App.css'
import './styles/text.css'
import './styles/inputs.css'
import './styles/buttons.css'
import {UserContextProvider} from './globalContext/user'
import Header from './pages/header'
import { useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from './globalContext/user'
function App() {
  const user = useContext(UserContext).user
  useEffect(()=>{
    if(!user?.logged_in){
      redirect('')
    }
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
