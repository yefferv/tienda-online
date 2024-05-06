import { useEffect, useState } from "react"
import { Product } from "../types/Product"

const useServices = (url: string) => {

    const [data, setData] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

  

    const handle = async () => {
      setLoading(true)
      try {
        const data = await fetch(url)
        const response = await data.json()

        /*const formater = response.map((item:Product)=>{
          return {
            ...item,
            price:  `$${item.price}`
          }
        })*/

        setData(response)
      }catch(error){
        setError(true)
      }finally{
        setLoading(false)
      }
      
    }

  return {
    data,
    handle,
    loading
  }
}

export default useServices