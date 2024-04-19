import CrCard from "../components/CrCard"
import CrNavbar from "../components/CrNavbar"
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/ProductService";
import { Product } from "../types/Product";



const Home = () => {


  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
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
