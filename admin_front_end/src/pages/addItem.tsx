import './styles/add_item_form.css'
export default function AddItem(){
    function select_photo(){
        document.getElementById('photo_input')?.click()
    }
    function photo_preview(e:React.ChangeEvent<HTMLInputElement>){
        const img = e.currentTarget.files![0]
        const preview_img = document.getElementById('preview_img') as HTMLImageElement
        preview_img.src = URL.createObjectURL(img)
        window.scrollTo(0,document.body.scrollHeight)
    }   
    return(
    <div className="add_item_container">
        <form className="add_item_form text-primary">
            <label>Name</label>
            <input></input>
            <label>Price</label>
            <input></input>
            <label>Description</label>
            <input></input>
            <label>Photo</label>
            <input onChange={(e)=>{photo_preview(e)}} id='photo_input' className='photo_input' type="file"></input>
            <div className='photo_selector black text-center' onClick={()=>{select_photo()}}>Choose File</div>
            <div className='preview_container'>
            <img className='preview_img' id='preview_img'></img>
            </div>
            <button className='button-primary white text-primary add_item_submit'>Submit</button>

        </form>

    </div>
        )
}