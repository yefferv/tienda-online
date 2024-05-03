import CrCard from "../components/CrCard"
import { Box, Container, Grid } from "@mui/material";
import HomeLayaout from "./HomeLayaout";
import useApi from "./hook/useApi";
import CenteredCircularProgress from "../components/CenteredCircularProgress";
import { useState } from "react";
import { Product } from "../types/Product";



const Home = () => {
  const {data, loading} = useApi(import.meta.env.VITE_API_URL)
  const [addCardPayment, setAddCardPayment] = useState<Product[]>([])

  const handleAddCard = (product: Product) => {
    setAddCardPayment(prevAddCardPayment => {
        // Verifica si el producto ya está en el arreglo
        const existingIndex = prevAddCardPayment.findIndex(item => item.id === product.id);
    
        // Si el producto ya existe, lo eliminamos
        if (existingIndex !== -1) {
            return prevAddCardPayment.filter(item => item.id !== product.id);
        } else {
            // Si el producto no existe, lo añadimos
            return [...prevAddCardPayment, product];
        }
    });
    console.log(addCardPayment); // Aquí está el estado actualizado
  }

  const handlePayment = () =>{
    console.log(addCardPayment)
  }

  return (
    <HomeLayaout numCard= {addCardPayment.length} handlePayment = {handlePayment}>
      <Container maxWidth="lg">
        <Box mt={5} display={'flex'} gap={2} >
            {loading?
            <CenteredCircularProgress />
            :
            <Grid container spacing={2}>
            {data.map((item : any)=>
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} xl={6}>
                  <CrCard item = {item} handleAddCard = {handleAddCard}/>
                </Grid>
            )}
            </Grid>}
        </Box>
      </Container>

  
    </HomeLayaout>
    
  )
}

export default Home
