import { createContext, useContext, useState } from "react";
import { signUp } from '../api';

const userAuthContext = createContext()

export function UserAuthContextProvider({children}){
    const [user, setUser] = useState({})

    const register = async (form)=>{
        const res = await signUp(form)
        console.log(res);
    }

    

    return <userAuthContext.Provider value={{user, register}}>{children}</userAuthContext.Provider>
}

export function useUserAuth(){
    return useContext(userAuthContext)
}