export async function getitems(){
    const response = await fetch('api.brookematthews.art')
    const data = await response.json();
    return(data)
}