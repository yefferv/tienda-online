import React from 'react'
import { AuthContext, AuthContextProps } from './AuthContext'





interface AuthProviderProps {
    children : React.ReactNode
}
const AuthProvider = ({children}: AuthProviderProps) => {

    const initialaalue : AuthContextProps  = {
        Login: (name: string)=> {},
        Logout: ()=> {},
        isAuth : false,
        user : {
            id:'',
            name:''
        }
        }
        
        
  return (
    <AuthContext.Provider value = {initialaalue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
