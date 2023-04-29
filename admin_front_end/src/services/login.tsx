export async function AdminLogin(email:string,password:string){
    const data = {
        'email':email,
        'password':password,
    }
    console.log(data)

    const response = await fetch('https://api.brookematthews.art/adminlogin',{
    method:'POST',
    body: JSON.stringify(data)
    })

    console.log(response)

}