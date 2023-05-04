import { Outlet } from 'react-router-dom'
import './styles/App.css'
import './styles/text.css'
import './styles/inputs.css'
import './styles/buttons.css'
import Header from './pages/header'
import Login from './pages/login'
import { UserContext } from './globalContext/user'
import { useContext } from 'react'
function App() {
const user = useContext(UserContext).user?.logged_in
if(user){
  return (
    <div>
    <Header></Header>
<div className='container'>
  <Outlet></Outlet>
</div>  
    </div>

  )
}
else{
  return (
    <div>
    <Header></Header>
<div className='container'>
  <Login></Login>
</div>  
    </div>

  )
}

}

export default App
