import { Outlet } from 'react-router-dom'
import './styles/App.css'
import './styles/text.css'
import './styles/inputs.css'
import './styles/buttons.css'
import Header from './pages/header'
function App() {
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
