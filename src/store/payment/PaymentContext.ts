import { createContext } from 'react'
import { Product } from '../../types/Product'

export interface IUser {
  id:string
  name:string
}

export interface PaymentContextProps {
    setProduct: (item: Product)=> void
    removeProduct: (productId: number)=> void
    products : Product[]
  
}

export const PaymentContext =  createContext({} as PaymentContextProps)
