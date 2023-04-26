import { Link } from 'react-router-dom'
import '../styles/pages/home.css'

export default function Home(){
    return(
    <div className='home_container'>
        <Link to={'/store'}><button className='button--primary'>Go to Shop</button></Link>
    </div>)
}