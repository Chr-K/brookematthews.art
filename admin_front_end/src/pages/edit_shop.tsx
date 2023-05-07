import './styles/edit_shop.css'
import GetItems from '../services/getitems'
export default function EditShop(){
        async function getitems_handler(){
                interface Painting{
                url:string,
                name:string,
                description:string,
                price:number
                }
                const data = await GetItems()
                const components = data.map((element:Painting)=>{
                        console.log(element.name)
                })
                return(components)
        }
    return(
<div className='edit_shop_container'>
        <button onClick={()=>{getitems_handler()}}>getitems</button>

</div>
        )
}