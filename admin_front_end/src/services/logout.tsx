export async function Logout(){
    const response = await fetch('https://api.brookematthews.art/admin_logout',
    {
        credentials:'include'
    })
    return(response)
}