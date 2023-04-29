export async function AdminLogin(email:string,password:string){
    const data = {
        'email':email,
        'password':password,
    }

    const response = await fetch('https://api.brookematthews.art/adminlogin',{
    method:'POST',
    body: JSON.stringify(data)
    })

    if(response.status === 201){
        console.log('loginok')
        return(response.status)
    }
    else{
        throw new Error('http error: ' + response.status)
    }

}