import './styles/home.css'
import { Link } from 'react-router-dom'
import { Logout } from '../services/logout'
import { useContext, useEffect } from 'react'
import { UserContext } from '../globalContext/user'
export default function Home(){
    const user = useContext(UserContext).user
    useEffect(()=>{
        if(user?.logged_in == false){
            window.location.href = 'https://admin.brookematthews.art'
        }
    },[user])
    return(
    <div className="home_container">
        <div className="home_nav_panel">
            <Link to={'/edit_shop'}><button className='button-primary text-primary white'>Edit Shop</button></Link>
        <button className='button-primary text-primary white'>Order Management</button>
        <button className='button-primary text-primary white'> Messages</button>
        <button onClick={()=>Logout()} className='button-primary text-primary white'>Logout</button>
        </div>
    </div>
    
    )
}
