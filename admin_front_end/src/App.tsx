import { Outlet } from 'react-router-dom'
import './styles/App.css'
import './styles/text.css'
import './styles/inputs.css'
import './styles/buttons.css'
function App() {

  return (
<div className='container'>
<div className='header title'>
ADMIN PANEL
</div>
<Outlet></Outlet>
</div>
  )
}

export default App
