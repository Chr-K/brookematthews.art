export async function AddNewItem(name:string,description:string,price:string,file:File){
const data = new FormData()
const response = await fetch('https://api.brookematthews.art/additem',{
    method:'POST',
    credentials:'include',
    body:data,
})
data.append('uploadPicture',file,file.name)
data.append('name',name)
data.append('description',description)
data.append('price',price)
const responseText = await response.text()
console.log(responseText)
return(response)
}