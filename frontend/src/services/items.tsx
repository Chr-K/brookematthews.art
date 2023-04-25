export async function getitems(){
    const response = await fetch('https://api.brookematthews.art/getitems')
    const data = await response.json();
    return(data)
}