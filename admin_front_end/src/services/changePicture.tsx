export async function changePicture(file:File,currentUrl:string){
    console.log(currentUrl)
    const data = new FormData()
    data.append('file',file,file.name)
    const response = await fetch('https://api.brookematthews.art/updateitemphoto',{
        method:'POST',
        credentials:'include',
        body:data
    })
    const responseText = await response.text()
    console.log(responseText)
    return(response)
}