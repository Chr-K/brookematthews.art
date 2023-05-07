import './styles/edit_shop.css'
import Item from '../components/item'
import GetItems from '../services/getitems'
export default function EditShop(){
        async function getitems_handler(){
                const data = await GetItems()
                console.log (data[0].url)
        }
    return(
<div className='edit_shop_container'>
        <button onClick={()=>{getitems_handler()}}>getitems</button>
        <Item title={'title'} price={12} imgurl={'./public/painting.jpeg'}></Item>
        <Item title={'title'} price={12} imgurl={'./public/painting.jpeg'}></Item>
        <Item title={'title'} price={12} imgurl={'./public/painting.jpeg'}></Item>
</div>
        )
}