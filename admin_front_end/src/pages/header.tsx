import { Link } from "react-router-dom"
export default function Header(){
function test(){
}

    return(
<div className='header title'>
<button onClick={()=>{test()}}>Test</button>
<Link className='link' to={'headerLink'}>Admin Panel</Link>
</div>
        )
}