export async function changePicture(file:File,currentUrl:string){

    const data = new FormData()
    data.append('file',file,'uploadPicture')
    data.append('data',JSON.stringify({currentPhotoUrl:currentUrl}))
    const response = await fetch('https://admin.brookematthews.art/updateitemphoto',{
        method:'POST',
        credentials:'include',
        body:data
    })
    console.log(response.json())
    return(response)
}