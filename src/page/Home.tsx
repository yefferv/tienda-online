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
      <Container maxWidth="lg">
        <Box sx={{display:'flex',
            marginTop: 5,
            gap: 2
        }}>
            {loadin?<p>Loading...</p>:
            <Grid container spacing={2}>
            {data.map((item)=>
                <Grid item key={item} xs={12} sm={6} md={4} lg={3} xl={6}>
                  <CrCard product={item}/>
                </Grid>
            )}
            </Grid>}
        </Box>
      </Container>

  
    </>
    
  )
}

export default Home
