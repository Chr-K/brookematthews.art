export async function changePicture(file:File,currentUrl:string){
    const file_info = {currentPhotoUrl:currentUrl}
    const data = new FormData()
    data.append('file',file,'uploadPicture')
    data.append('data',JSON.stringify(file_info))
    const response = await fetch('https://api.brookematthews.art/updateitemphoto',{
        method:'POST',
        credentials:'include',
        body:data
    })
    const responseText = await response.text()
    console.log(responseText)
    return(response)
}