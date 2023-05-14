export async function AddNewItem(name:string,description:string,price:string,file:File){
const data = new FormData()
data.append('uploadPicture',file,file.name)
data.append('itemName',name)
data.append('description',description)
data.append('price',price)
const response = await fetch('https://api.brookematthews.art/additem',{
    method:'POST',
    credentials:'include',
    body:data,
})

const responseText = await response.text()
console.log(responseText)
return(response)
}