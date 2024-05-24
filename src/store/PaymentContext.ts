import { createContext } from 'react'
import { Product } from '../types/Product'

export interface IUser {
  id:string
  name:string
}

export interface PaymentContextProps {
    setProduct: (item: Product)=> void
    product : Product[]
  
}

export const PaymentContext =  createContext({} as PaymentContextProps)
