import CrCard from "../components/CrCard"
import CrNavbar from "../components/CrNavbar"
import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { Box, Container, Grid } from "@mui/material";
import HomeLayaout from "./HomeLayaout";



const Home = () => {

  
  const [data, setdata] = useState<Product[]>([]);
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
    <HomeLayaout>
      <Container maxWidth="lg">
        <Box sx={{display:'flex',
            marginTop: 5,
            gap: 2
        }}>
            {loadin?<p>Loading...</p>:
            <Grid container spacing={2}>
            {data.map((item)=>
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} xl={6}>
                  <CrCard item = {item}/>
                </Grid>
            )}
            </Grid>}
        </Box>
      </Container>

  
    </HomeLayaout>
    
  )
}

export default Home
