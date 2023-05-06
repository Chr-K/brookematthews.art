import './styles/home.css'
import { Link } from 'react-router-dom'
import { Logout } from '../services/logout'

export default function Home(){
    return(
    <div className="home_container">
        <div className="home_nav_panel">
        <Link to={'/edit_shop'}><button className='button-primary text-primary white'>Edit Shop</button></Link>
        <Link to={'/order_management'}><button className='button-primary text-primary white'>Order Management</button></Link>
        <Link to={'/messages'}><button className='button-primary text-primary white'>Messages</button></Link>
        <button onClick={()=>Logout()} className='button-primary text-primary white'>Logout</button>
        </div>
    </div>
    
    )
}
