import './styles/home.css'
export default function Home(){
    function handlesubmit(){
        
    }




    return(
    <div className="home_container black">
        <form className="login_panel text-primary">
            <label>Email</label>
            <input className='text-primary'></input>
            <label>Password</label>
            <input className='text-primary'></input>
            <button onSubmit={()=>{handlesubmit()}} className='submit white text-primary'>Login</button>
        </form>
    </div>
    )
}