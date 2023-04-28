export async function AdminLogin(email:string,password:string){
    const data = {
        'email':email,
        'password':password,
    }

    await fetch('https://api.brookematthews.art/adminlogin',{
    method:'POST',
    body: JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.error(error))


}