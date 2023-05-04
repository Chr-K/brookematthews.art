import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../globalContext/user"
export default function Header(){
    const user = useContext(UserContext).user?.logged_in
    const [headerLink,setHeaderLink] = useState('')
    useEffect(()=>{
        if(user){
            setHeaderLink('/home')
        }
        else{
            setHeaderLink('')
        }
    },[user])
    return(
<div className='header title'>
<Link className='link' to={headerLink}>Admin Panel</Link>
</div>
        )
}