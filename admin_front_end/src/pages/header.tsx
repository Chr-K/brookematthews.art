import { Link } from "react-router-dom"
export default function Header(){
    return(
<div className='header title'>
<Link className='link' to={'headerLink'}>Admin Panel</Link>
</div>
        )
}