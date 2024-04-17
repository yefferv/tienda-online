import { Product } from "../types/Product";

const API_ENDPOINT = 'https://fakestoreapi.com/products';


export async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return []; 
  }
}


export async function getProductById(productId: number): Promise<Product | null> {
  try {
    const response = await fetch(`${API_ENDPOINT}/${productId}`);
    if (!response.ok) {
      throw new Error('Error al obtener el producto');
    }
    const data: Product = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
