import './App.css'
import { Link, Outlet } from 'react-router-dom'
function App() {

  return (
   <div className='container'>
    <div className='header text-center large-text'>
      <Link className='pink noul' to={''}>Brooke's Gallery</Link>
    </div>
    <div className='page'>
    <Outlet></Outlet>
    </div>
   </div>
  )
}

export default App