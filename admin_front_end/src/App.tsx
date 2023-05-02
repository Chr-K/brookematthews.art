import { Outlet } from 'react-router-dom'
import './styles/App.css'
import './styles/text.css'
import './styles/inputs.css'
import './styles/buttons.css'
import {UserContextProvider } from './globalContext/user'
import Header from './pages/header'

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
