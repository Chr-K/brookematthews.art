import { Outlet, redirect } from 'react-router-dom'
import './styles/App.css'
import './styles/text.css'
import './styles/inputs.css'
import './styles/buttons.css'
import {UserContextProvider} from './globalContext/user'
import Header from './pages/header'
import { useEffect } from 'react'

function App() {
  useEffect(()=>{
    async function Status(){
      const response = await fetch('https://api.brookematthews.com/get_admin_status')
      const data = await response.json()
      if(!data.status){
        redirect('')
      }
      console.log(data)

    }
    Status()
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
