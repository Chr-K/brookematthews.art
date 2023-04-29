export async function AdminLogin(email:string,password:string){
    const data = {
        'email':email,
        'password':password,
    }

    const response = await fetch('https://api.brookematthews.art/adminlogin',{
    method:'POST',
    body: JSON.stringify(data)
    })

    if(response.ok){
        return(response.status)
    }
    else{
        throw new Error('http error: ' + response.status)
    }

}


async function redirect(){
const response = await fetch('https://api.brookematthews.art/admin_redirect_home',{
    method:'GET',
})
return (response);
}