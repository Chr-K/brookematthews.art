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
async function isLoggedIn(){
const response = await fetch('https://api.brookematthews.art/get_admin_status')
const data = await response.json()
return(data)
}

export const UserContext = createContext<UserContextInterface>({
    user: null,
    setUser:()=>{}
})
export const UserContextProvider: React.FC<UserContextProviderProps> = ({children})=>{
    const [user,setUser] = useState<User | null>({logged_in:false})
    useEffect(()=>{
        async function checkIsLoggedIn(){
            const status = await isLoggedIn()
            setUser({...user,logged_in:status})
        }
        checkIsLoggedIn()
        },[])
return(
    <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
)
}