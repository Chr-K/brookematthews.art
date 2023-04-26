import '../styles/pages/home.css'
import { getitems } from '../services/items'
async function alertitems(){
const data = await getitems()
console.log(Array.isArray(data))
}
export default function Home(){
    return(
    <div className='home_container'>
        <button onClick={()=>{alertitems()}} className="button button--primary">Get Items</button>
    </div>)
}