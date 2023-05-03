export async function AdminLogin(email:string,password:string){
    const data = {
        'email':email,
        'password':password,
    }

    const response = await fetch('https://api.brookematthews.art/adminlogin',{
    method:'POST',
    credentials:'include',
    body: JSON.stringify(data)
    })

    if(response.ok){
        window.location.href = 'https://admin.brookematthews.art/home'
        return(response.status)
    }
    else{
        throw new Error('http error: ' + response.status)
    }

}


