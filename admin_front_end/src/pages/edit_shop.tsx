import './styles/edit_shop.css'
import Item from '../components/item'
import GetItems from '../services/getitems'
import { Link } from 'react-router-dom'
import { ReactNode, useEffect, useState } from 'react'
export default function EditShop(){
        const [items,setItems] = useState<ReactNode[]>([])
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
                                return (<Item key={index} title={element.name} imgurl={element.url} price={element.price}></Item>)
                        })
                        setItems(components)
                }
                getitems()
        },[])

    return(
<div className='edit_shop_container'>
        {items}
                <Link className="link" to={'/additem'}>        

        <div className='add_item'>
        <div className='add_item_text black'>
                Add Item
        </div>
        </div>
                </Link>

</div>
        )
}