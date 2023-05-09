export async function changePicture(file:File,currentUrl:string){
    const data = new FormData()
    data.append('uploadPicture',file,file.name)
    data.append('currentPhotoUrl',currentUrl)
    const response = await fetch('https://api.brookematthews.art/updateitemphoto',{
        method:'POST',
        credentials:'include',
        body:data
    })
    const responseText = await response.text()
    console.log(responseText)
    return(response)
}