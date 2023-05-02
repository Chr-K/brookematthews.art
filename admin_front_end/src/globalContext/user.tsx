import {createContext,useState } from "react";

interface UserContextInterface{
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}
export interface User{
    logged_in:Promise<Response>
}
interface UserContextProviderProps{
    children:React.ReactNode
}
async function isLoggedIn(){
const response = await fetch('https://api.brookematthews.art/get_admin_status')
const data = await response.json()
return(data)

}
export const UserContext = createContext<UserContextInterface>({
    user: {
        logged_in:isLoggedIn()
    },
    setUser:()=>{}
})
export const UserContextProvider: React.FC<UserContextProviderProps> = ({children})=>{
    const [user,setUser] = useState<User | null>(null)
return(
    <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
)
}