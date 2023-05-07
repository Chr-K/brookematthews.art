export default async function GetItems(){
const response = await fetch('https://api.brookematthews.art/getitems')
const data = response.json()
return data
}
