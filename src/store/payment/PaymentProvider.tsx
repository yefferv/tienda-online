import { useState } from 'react'
import { PaymentContext } from './PaymentContext'
import { Product } from '../../types/Product'


interface PaymentContextProps {
    children : React.ReactNode
}

const init = () =>{
    const user = JSON.parse(localStorage.getItem('user') || 'null')
    return {
        isAuth :!!user,
        user: user,
    }
}

const PaymentProvider = ({children}: PaymentContextProps) => {

    const [products,setProducts] = useState<Product[]>([])

    const setProduct = (product:Product)=>{
         setProducts([...products, product])
    }

    const removeProduct = (productId: number) => {
        setProducts(products.filter(product => product.id !== productId));
      };
            
    return (
        <PaymentContext.Provider value = {{
            products:products,
            setProduct,
            removeProduct
        }}>
        {children}
        </PaymentContext.Provider>
    )
}

export default PaymentProvider
