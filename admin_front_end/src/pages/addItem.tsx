import './styles/add_item_form.css'
import { useState } from 'react'
import { AddNewItem } from '../services/addItem'

export default function AddItem(){
    const [insertImage,setInsertImage] = useState<File>()

    function select_photo(){
        document.getElementById('photo_input')?.click()
    }
    function photo_preview(e:React.ChangeEvent<HTMLInputElement>){
        const img = e.currentTarget.files![0]
        const preview_img = document.getElementById('preview_img') as HTMLImageElement
        setInsertImage(img)
        preview_img.src = URL.createObjectURL(img)
        window.scrollTo(0,document.body.scrollHeight)
    }   
    function handleAddItem(){
        const name = document.getElementById('add_item_name') as HTMLInputElement
        const price = document.getElementById('add_item_price') as HTMLInputElement
        const description = document.getElementById('add_item_description') as HTMLInputElement

        AddNewItem(name.value,description.value,price.value,insertImage!)
    }
    return(
    <div className="add_item_container">
        <form className="add_item_form text-primary">
            <label>Name</label>
            <input id='add_item_name'></input>
            <label>Price</label>
            <input id='add_item_price'></input>
            <label>Description</label>
            <input id='add_item_description'></input>
            <label>Photo</label>
            <input onChange={(e)=>{photo_preview(e)}} id='photo_input' className='photo_input' type="file"></input>
            <div className='photo_selector black text-center' onClick={()=>{select_photo()}}>Choose File</div>
            <div className='preview_container'>
            <img className='preview_img' id='preview_img'></img>
            </div>
            <button type='button' onClick={()=>(handleAddItem())} className='button-primary white text-primary add_item_submit'>Submit</button>

        </form>

    </div>
        )
}