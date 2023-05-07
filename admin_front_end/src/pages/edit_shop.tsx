import './styles/edit_shop.css'
import Item from '../components/item'
import GetItems from '../services/getitems'
import { useEffect, useState } from 'react'
export default function EditShop(){
        const [items,setItems] = useState()
        useEffect(()=>{
                async function getitems(){
                        interface Painting{
                        url:string,
                        name:string,
                        description:string,
                        price:number
                        }
                        const data = await GetItems()
                        const components = data.map((element:Painting,index:number)=>{
                                <Item key={index} title={element.name} imgurl={element.url} price={element.price}></Item>
                        })
                        setItems(components)
                }
                getitems()
        },[items])

    return(
<div className='edit_shop_container'>
        {items}
</div>
        )
}