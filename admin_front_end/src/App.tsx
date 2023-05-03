import { Outlet } from 'react-router-dom'
import './styles/App.css'
import './styles/text.css'
import './styles/inputs.css'
import './styles/buttons.css'
import {UserContextProvider, UserContext} from './globalContext/user'
import Header from './pages/header'
import { useContext } from 'react'
import Login from './pages/login'

function App() {
const user = useContext(UserContext).user
  return (
<UserContextProvider>
<Header></Header>
<div className='container'>
    {user?.logged_in? <Outlet></Outlet> : <Login></Login> }
</div>
</UserContextProvider>
  )
}

export default App
