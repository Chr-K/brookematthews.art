import { Outlet } from 'react-router-dom'
import './styles/App.css'
import './styles/text.css'
import './styles/inputs.css'
import './styles/buttons.css'
import {UserContextProvider} from './globalContext/user'
import Header from './pages/header'
import { useEffect } from 'react'
useEffect(()=>{
  async function Status(){
    const response = await fetch('https://api.brookematthews.com/get_admin_status')
    const data = response.json()
    if(!data){
      window.location.href = 'https://admin.brookematthews.art'
    }
  }
  Status()
})
function App() {
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
