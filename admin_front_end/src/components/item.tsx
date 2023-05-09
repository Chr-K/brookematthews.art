import './styles/item.css'
import {CheckMark} from '../assets/icons/barrel.tsx'
import { useState } from 'react'
import TrashCan from '../assets/icons/trash.tsx'
import PictureIcon from '../assets/icons/picture.tsx'
import { changePicture } from '../services/changePicture.tsx'
interface Item{
    title:string,
    imgurl:string,
    price:number
}

export default function Item({title,imgurl,price}:Item){
    const [itemTitle,setItemTitle] = useState(title)
    const [itemPrice,setItemPrice] = useState(price)
    //checkmark state for inputs according to their type
    const [titleCheck,setTitleCheck] = useState('none')
    const [priceCheck,setPriceCheck] = useState('none')

   function inputFocus(e:React.FocusEvent<HTMLInputElement>,textSetter:Function,dvalue:string){
        if(e.currentTarget.value.trim() === dvalue){
            e.currentTarget.value = ''
            textSetter('')
        }
    }

    //leaves focus
   function inputBlur(e:React.FocusEvent<HTMLInputElement>,textSetter:Function,checkSetter:Function,dvalue:string){
        if(e.currentTarget.value.trim() == '')
        {
            checkSetter('none')
            e.currentTarget.value = dvalue
            textSetter(e.currentTarget.value)
        }

    }
    function inputChange(e:React.ChangeEvent<HTMLInputElement>,textSetter:Function,checkSetter:Function){
        textSetter(e.currentTarget.value)
        checkSetter('inline')

    }
    function pictureInput(){
        document.getElementById('change_picture_input')?.click()
    }
    function selectPicture(e:React.ChangeEvent<HTMLInputElement>){
        const file = e.currentTarget.files![0]
        const imgElemenet = document.getElementById('itemPicture') as HTMLImageElement
        if(file.type.startsWith('image')){
            imgElemenet.src = URL.createObjectURL(file);
            changePicture(file,imgurl)
            console.log(imgurl)
        }
        else{
            alert('invalid file type')
        }
    }
    return(
        <div className="item_container">
            <div className='edit_item_options'>
                <div className='delete_item'>
                    <TrashCan></TrashCan>
                </div>
                <div>
                    <input className='text-primary input-primary white text-center' onChange={(e)=>{inputChange(e,setItemTitle,setTitleCheck)}} onBlur={(e)=>{inputBlur(e,setItemTitle,setTitleCheck,'Title')}} onFocus={(e)=>inputFocus(e,setItemTitle,title)} defaultValue={itemTitle}></input>
                </div>
                <div style={{display:titleCheck}} onClick={()=>{alert('hello')}} className='title_check'>
                    <CheckMark></CheckMark>
                </div>
            </div>
            <img id='itemPicture' className='edit_image' src={imgurl}></img>
            <div className='edit_item_options'>
            <div className='picture-icon-container' onClick={()=>pictureInput()}>
                <PictureIcon></PictureIcon>
                <input name='uploadPicture' id='change_picture_input' onChange={(e)=>selectPicture(e)} type='file' style={{display:'none'}}></input>
            </div>
            <input className='text-primary input-primary white text-center col2' onChange={(e)=>{inputChange(e,setItemPrice,setPriceCheck)}} onBlur={(e)=>{inputBlur(e,setItemPrice,setPriceCheck,price.toString())}} onFocus={(e)=>inputFocus(e,setItemPrice,price.toString())} defaultValue={itemPrice}></input>
            <div style={{display:priceCheck}} onClick={()=>{alert('hello')}} className='price_check'>
                    <CheckMark></CheckMark>
            </div>
            </div>



        </div>
        )

}
