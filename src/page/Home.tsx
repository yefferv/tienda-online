import CrCard from "../components/CrCard"
import CrNavbar from "../components/CrNavbar"
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/ProductService";
import { Product } from "../types/Product";
import { Box, Container, Grid } from "@mui/material";



const Home = () => {


  const [data, setdata] = useState([]);
  const [loadin, setLoadin] = useState(false);

  useEffect(() => {
    setLoadin(true)
    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setdata(json))
        .catch(err=>console.log(err))
        .finally(()=>{
          setLoadin(false)
          console.log('fetch finalizado')

        })
  }, []);


  return (
    <>
    <CrNavbar></CrNavbar>
    <Box sx={{display:'flex',
        marginTop: 5,
        gap: 2
    }}>
        <Grid container spacing={2}>
        {products.map((item)=>
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
               <CrCard key={item.id} product={item}/>
            </Grid>
        )}
        </Grid>
    </Box>

  
    </>
    
  )
}

export default Home
