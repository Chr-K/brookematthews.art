export async function getitems(){
    const response = await fetch('https://api.brookematthews.art')
    const data = await response.json();
    return(data)
}