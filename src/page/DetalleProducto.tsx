import React, { useEffect } from 'react'
import HomeLayaout from './HomeLayaout'
import { Button } from '@mui/material'
import { useHistory, useParams } from 'react-router-dom'


const DetalleProducto = () => 
  {
  const history = useHistory()
  interface Params {
    slug: string; 
  }

  const { slug } : Params = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${slug}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
  }, [slug]);
  
  return (
    <HomeLayaout numCard={1} handlePayment = {()=>{ }}>
      <div style={{
        display : 'flex',
        flexDirection :'column',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh'
        }}>

      <h1>{ slug }</h1>
      <Button onClick={()=>history.push('/Home')}>ir atras {' '}
      </Button>
        
      </div>
    </HomeLayaout>
  )
}

export default DetalleProducto
