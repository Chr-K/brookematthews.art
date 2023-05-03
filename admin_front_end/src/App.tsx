import { Outlet } from 'react-router-dom'
import './styles/App.css'
import './styles/text.css'
import './styles/inputs.css'
import './styles/buttons.css'
import Header from './pages/header'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { UserContext } from './globalContext/user'
function App() {
  const user = useContext(UserContext).user
  const [debouncedUser,setDebouncedUser] = useState(user)
  useEffect(()=>{
    const timerId = setTimeout(()=>{
      setDebouncedUser(user)
    },500)
    return ()=>{
      clearTimeout(timerId)
    }
  },[user])
  useEffect(()=>{
    if(debouncedUser?.logged_in == false && window.location.href != 'https://admin.brookematthews.art/'){
      window.location.href = 'https://admin.brookematthews.art/'
    }
    console.log(user?.logged_in)
  },[debouncedUser])
  return (
    <div>
    <Header></Header>
<div className='container'>
  <Outlet></Outlet>
</div>  
    </div>

  )
}

export default App
