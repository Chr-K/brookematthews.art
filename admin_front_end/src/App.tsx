import { Outlet } from 'react-router-dom'
import './styles/App.css'
import './styles/text.css'
import './styles/inputs.css'
import './styles/buttons.css'
import Header from './pages/header'
import Login from './pages/login'
import { useEffect, useState } from 'react'

function App() {
  const [page,setPage] = useState(
    <Outlet></Outlet>    
    )
  useEffect(()=>{
    async function status(){
      const response = await fetch('https://api.brookematthews.art/get_admin_status')
      if(response.status){
        setPage (
          <div>
          <Header></Header>
      <div className='container'>
        <Outlet></Outlet>
      </div>  
          </div>
        )
      }
      else{
        setPage (
          <div>
          <Header></Header>
      <div className='container'>
        <Login></Login>
      </div>  
          </div>
        )
      }
    }
    status()
  },[])

  return(page)

}

export default App
