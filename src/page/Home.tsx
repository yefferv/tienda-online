import { Box } from "@mui/material"
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
        {[1,2].map((item)=>
            <CrCard key={item}/>
        )}
    </Box>

    <h2>Prueba - Lista de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>Precio: ${product.price}</p>
            <p>Categoría: {product.category}</p>
            {/* Otros detalles del producto... */}
          </li>
        ))}
      </ul>
    </>
    
  )
}

export default Home
