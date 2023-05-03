import './styles/login.css'
import { AdminLogin } from '../services/login'
import { email_check } from '../helpers/regex'
import { useState} from 'react'
export default function Login(){


    const [FormData,setFormData] = useState({
        email:'',
        password:'',
    })

    async function handlesubmit(){
        if(email_check(FormData.email)){
                const response = await AdminLogin(FormData.email,FormData.password)
            return(response)
        }
        else{
            //email format invalid
        }
    }

    return(
    <div className="login_container black">
        <form className="login_panel text-primary">
            <label>Email</label>
            <input onChange={e=>setFormData({...FormData,email:e.target.value})} className='text-primary'></input>
            <label>Password</label>
            <input onChange={e=>setFormData({...FormData,password:e.target.value})} className='text-primary'></input>
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