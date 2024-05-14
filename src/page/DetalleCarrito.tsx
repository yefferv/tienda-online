import { useEffect } from 'react'
import HomeLayaout from './HomeLayaout'
import { Box, Button, Container, Grid } from '@mui/material'
import { useHistory, useLocation } from 'react-router-dom'
import { Product } from '../types/Product';
import useApi from './hook/useApi';
import CenteredCircularProgress from '../components/CenteredCircularProgress';
import CrCard from '../components/CrCard';


interface LocationState {
    addCardPayment?: Product[]; // Definir el tipo de addCardPayment como un arreglo de Product
  }


const DetalleCarrito = () => 
  {
    const location = useLocation();
    const { addCardPayment = []} = location.state as LocationState;

    const history = useHistory()

    console.log(addCardPayment)
    const totalPrecio: number = addCardPayment.reduce((total, producto) => total + producto.price, 0);
    console.log(totalPrecio)


        
    return (
        <HomeLayaout numCard= {addCardPayment.length} handlePayment = {()=>{ }}>
            <Box mt={5} display={'flex'} gap={2} justifyContent={'center'} >
                <Button>TOTAL = {totalPrecio}</Button>
                <Button variant="contained">Pagar</Button>
            </Box>
            <Container maxWidth="lg">
                <Box mt={5} display={'flex'} gap={2} >
                    
                    <Grid container spacing={2}>
                    {addCardPayment.map((item : any)=>
                        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} xl={4}>
                        <CrCard item = {item} handleAddCard = {()=>{}}  isVisible = {false}/>
                        </Grid>
                    )}
                    </Grid>
                </Box>
        </Container>

    
        </HomeLayaout>
)}

export default DetalleCarrito
