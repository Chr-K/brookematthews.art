import './styles/edit_shop.css'
import Item from '../components/item'
import GetItems from '../services/getitems'
export default function EditShop(){
        GetItems()
    return(
<div className='edit_shop_container'>
        <Item title={'title'} price={12} imgurl={'./public/painting.jpeg'}></Item>
        <Item title={'title'} price={12} imgurl={'./public/painting.jpeg'}></Item>
        <Item title={'title'} price={12} imgurl={'./public/painting.jpeg'}></Item>
</div>
        )
}