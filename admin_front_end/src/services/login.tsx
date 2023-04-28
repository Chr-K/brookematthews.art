export async function AdminLogin(email:string,password:string){
    const data = {
        'email':email,
        'password':password,
    }

    await fetch('https://api.brookematthews.art/adminlogin',{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400'
    },
    body: JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.error(error))


}