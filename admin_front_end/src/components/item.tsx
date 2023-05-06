import './styles/item.css'
import {CloseIcon,PencilIcon} from '../assets/icons/barrel.tsx'
export default function Item(){

    return(
        <div className="item_container">
            <div className='edit_item_options'>
                <div>
                <CloseIcon></CloseIcon>
                </div>
                <div className='pencil_icon'>
                <PencilIcon></PencilIcon>
                </div>
                

            </div>
            <img src='../src/assets/painting.jpeg'></img>
            <div className='text-primary'>$20,000</div>
        </div>
        )
}