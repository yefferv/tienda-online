import { useEffect, useState } from "react"
import { Product } from "../types/Product"
import AxiosClient from "./clients/AxiosClient"

const useServices = () => {

    const [data, setData] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    
    const handleFetch = async () => {
      setLoading(true)
      try {
        const response = await AxiosClient("products")
        setData(response.data)
        
      } catch (error) {
        setError(true)
      }finally{
        setLoading(false)
      }
      

      /*try {
        const data = await fetch(url)
        const response = await data.json()

        /*const formater = response.map((item:Product)=>{
          return {
            ...item,
            price:  `$${item.price}`
          }
        })

        setData(response)
      }catch(error){
        setError(true)
      }finally{
        setLoading(false)
      }*/
      
    }

  return {
    data,
    handleFetch,
    loading,
    error
  }
}

export default useServices