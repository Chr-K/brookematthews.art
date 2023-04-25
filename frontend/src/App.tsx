import './styles/components/button.css'
import './styles/base/typography.css'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
<div className='app'>
  <header>
  </header>
  <Outlet></Outlet>
</div>
  )
}

export default App
