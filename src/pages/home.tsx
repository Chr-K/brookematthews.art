import { Link } from 'react-router-dom'
import './styles/home.css'
export default function Home(){
    return(
    <div className="text-center">
        <div className="large-text gold">
        Hand Painted
        </div>
        <div className="medium-text pink">
            Premium <span className="gold">Art</span>  for Any space
        </div>
        <div>
            <Link to={'/store'}>
            <button className='main-button medium-text'>Shop Now</button>
            </Link>
        </div>
    </div>
    )
}