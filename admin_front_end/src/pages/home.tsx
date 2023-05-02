import './styles/home.css'
import { Link } from 'react-router-dom'

export default function Home(){
    return(
    <div className="home_container">
        <div className="home_nav_panel">
            <Link to={'/edit_shop'}><button className='button-primary text-primary white'>Edit Shop</button></Link>
        <button className='button-primary text-primary white'>Order Management</button>
        <button className='button-primary text-primary white'> Messages</button>
        <button className='button-primary text-primary white'>Logout</button>
        </div>
    </div>
    
    )
}
