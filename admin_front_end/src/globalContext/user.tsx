import {createContext,useEffect,useState } from "react";

interface UserContextInterface{
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}
export interface User{
    logged_in:Boolean
}
interface UserContextProviderProps{
    children:React.ReactNode
}

async function isLoggedIn(){
        const response = await fetch('https://api.brookematthews.art/get_admin_status',{
        credentials: 'include'
        })
        const data = await response.json()
        const status = data.status
        return(status)
}

export const UserContext = createContext<UserContextInterface>({
    user: null,
    setUser:()=>{}
})
export const UserContextProvider: React.FC<UserContextProviderProps> = ({children})=>{
    const [user,setUser] = useState<User | null>({logged_in:false})
    useEffect(()=>{
        async function checkStatus(){
            const state = await isLoggedIn()
            setUser({...user,logged_in:state})
        }
        console.log(user)
        checkStatus()
        },[])
return(
    <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
)
}