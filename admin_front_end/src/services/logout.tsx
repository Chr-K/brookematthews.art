export async function Logout(){
    const response = await fetch('https://api.brookematthews.art/admin_logout',
    {
        credentials:'include'
    })
    if(response.ok){
        window.location.href = 'https://admin.brookematthews.art/home'
    }
    return(response)
}