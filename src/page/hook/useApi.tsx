import { useEffect } from "react"
import useServices from "../../services/useServices"

const useApi = (url:string) => {
    const {handle, data, loading} = useServices(url)
      useEffect(() => {
        handle()
      }, [])
      
    return {
        data,
        loading
    }
}

export default useApi