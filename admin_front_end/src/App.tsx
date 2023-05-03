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
