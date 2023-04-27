import './styles/home.css'
import { AdminLogin } from '../services/login'
import { email_check } from '../helpers/regex'
import { useEffect, useState } from 'react'
export default function Home(){
    const [FormData,setFormData] = useState({
        email:'',
        password:'',
    })

    function handlesubmit(){
        if(email_check(FormData.email)){
                    AdminLogin(FormData.email,FormData.password)
        }
        else{
            //email format invalid
        }
    }

    useEffect(()=>{
    console.log(FormData)
    })


    return(
    <div className="home_container black">
        <form className="login_panel text-primary">
            <label>Email</label>
            <input onChange={e=>setFormData({...FormData,email:e.target.value})} className='text-primary'></input>
            <label>Password</label>
            <input className='text-primary'></input>
            <button onClick={
            e=>{
            e.preventDefault()
            handlesubmit()
            }
            } className='submit white text-primary'>Login</button>
        </form>
    </div>
    )
}