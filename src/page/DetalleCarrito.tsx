import { useContext, useEffect, useState } from 'react'
import HomeLayaout from './HomeLayaout'
import { Box, Button, Container, Grid } from '@mui/material'
import { useHistory, useLocation } from 'react-router-dom'
import { Product } from '../types/Product';
import useApi from './hook/useApi';
import CenteredCircularProgress from '../components/CenteredCircularProgress';
import CrCard from '../components/CrCard';
import { PaymentContext } from '../store/payment/PaymentContext';



interface LocationState {
    addCardPayment?: Product[]; // Definir el tipo de addCardPayment como un arreglo de Product
  }


const DetalleCarrito = () => 
  {

    const {setProduct,removeProduct, products} = useContext(PaymentContext)
    
    const history = useHistory()

    const handleRetornarHome = () => {
        history.push('/home')
      };
    


        
    const totalPrecio: number = products.reduce((total, producto) => total + producto.price, 0);
            
    return (
        <HomeLayaout handlePayment = {()=>{ }}>
            <Box mt={5} display={'flex'} gap={2} justifyContent={'center'} >
                <Button>TOTAL = {totalPrecio}</Button>
                <Button variant="contained">Pagar</Button>
                <Button variant="contained" onClick={handleRetornarHome}>Retornar</Button>
                
            </Box>
            <Container maxWidth="lg">
                <Box mt={5} display={'flex'} gap={2} >
                    
                    <Grid container spacing={2}>
                    {products.map((item : any)=>
                        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} xl={4}>
                        <CrCard item = {item} handleAddCard = {setProduct}  isVisible = {false}/>
                        </Grid>
                    )}
                    
                    </Grid>
                </Box>
        </Container>

    
        </HomeLayaout>
)}

export default DetalleCarrito
