import '../styles/pages/home.css'
import { getitems } from '../services/items'
async function alertitems(){
const data = await getitems()
interface Item{
    name:string
}
data.array.forEach((item:Item) => {
    console.log(item.name)
});
}
export default function Home(){
    return(
    <div className='home_container'>
        <button onClick={()=>{alertitems()}} className="button button--primary">Get Items</button>
    </div>)
}