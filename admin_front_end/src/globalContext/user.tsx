import {createContext,useEffect,useState } from "react";

interface UserContextInterface{
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}
export interface User{
    logged_in:boolean
}
interface UserContextProviderProps{
    children:React.ReactNode
}
interface UserStatus{
    status:Boolean
}
async function isLoggedIn(){
        const response = await fetch('https://api.brookematthews.art/get_admin_status',{
        credentials: 'include'
        })
        const data = await response.json()
        const status:UserStatus = data.status
        return(status)
}

export const UserContext = createContext<UserContextInterface>({
    user: null,
    setUser:()=>{}
})
export const UserContextProvider: React.FC<UserContextProviderProps> = ({children})=>{
    const [user,setUser] = useState<User | null>({logged_in:false})
    useEffect(()=>{
        isLoggedIn()

        },[])
return(
    <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
)
}