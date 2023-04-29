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
        redirect()

        return(response.status)
    }
    else{
        throw new Error('http error: ' + response.status)
    }

}


 function redirect(){
    window.location.href = 'https://admin.brookematthews.art/home'
}