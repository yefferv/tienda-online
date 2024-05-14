import { createContext } from 'react'

export interface AuthContextProps {
  Login: (name: string)=> void
  Logout: ()=> void
  isAuth : boolean
  user : {
    id:string
    name:string
  }
}

export const AuthContext =  createContext({} as AuthContextProps)
