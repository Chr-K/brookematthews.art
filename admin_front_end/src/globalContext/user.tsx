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



export const UserContext = createContext<UserContextInterface>({
    user: null,
    setUser:()=>{}
})
export const UserContextProvider: React.FC<UserContextProviderProps> = ({children})=>{
    const [user,setUser] = useState<User | null>({logged_in:false})
    useEffect(()=>{
        async function isLoggedIn(){
            const response = await fetch('https://api.brookematthews.art/get_admin_status',{
            credentials: 'include'
            })
            const data = await response.json()
            const status = await data.status
            if(status == false && window.location.href !== 'https://admin.brookematthews.art/'){
            }
            if(status == true && window.location.href == 'https://admin.brookematthews.art/'){
                window.location.href = 'https://admin.brookematthews.art/home'
            }
            setUser({logged_in:await status})
    }
    isLoggedIn()
        },[])
return(
    <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
)
}