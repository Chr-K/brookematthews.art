import './styles/item.css'
import {CheckMark, CloseIcon} from '../assets/icons/barrel.tsx'
import { useState } from 'react'

export default function Item(){
    const [itemValue,setItemTitle] = useState('Title')
    const [itemPrice,setItemPrice] = useState('$400')
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

    return(
        <div className="item_container">
            <div className='edit_item_options'>
                <div>
                <CloseIcon></CloseIcon>
                </div>
                <div>
                    <input className='text-primary input-primary white text-center' onChange={(e)=>{inputChange(e,setItemTitle,setTitleCheck)}} onBlur={(e)=>{inputBlur(e,setItemTitle,setTitleCheck,'title')}} onFocus={(e)=>inputFocus(e,setItemTitle,'Title')} defaultValue={itemValue}></input>
                </div>
                <div style={{display:titleCheck}} onClick={()=>{alert('hello')}} className='title_check'>
                    <CheckMark></CheckMark>
                </div>
            </div>

            <img src='../public/painting.jpeg'></img>
            <div className='edit_item_options'>
            <input className='text-primary input-primary white text-center col2' onChange={(e)=>{inputChange(e,setItemPrice,setPriceCheck)}} onBlur={(e)=>{inputBlur(e,setItemPrice,setPriceCheck,'$400')}} onFocus={(e)=>inputFocus(e,setItemPrice,'$400')} defaultValue={itemPrice}></input>
            <div style={{display:priceCheck}} onClick={()=>{alert('hello')}} className='price_check'>
                    <CheckMark></CheckMark>
            </div>
            </div>



        </div>
        )
}