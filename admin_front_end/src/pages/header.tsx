import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../globalContext/user"
export default function Header(){
const userContext = useContext(UserContext)
const user = userContext.user
async function test(){
    var res = await user?.logged_in
    .then(res=>res.json())
    console.log(res)
}

    return(
<div className='header title'>
<button onClick={()=>{test()}}>Test</button>
<Link className='link' to={'headerLink'}>Admin Panel</Link>
</div>
        )
}