
import React, {useState, useEffect} from 'react';
import { useGlobalContext } from '../context/Context';
import Product from './Product'
import axios from "axios"; 

const ProductsContainer = ({children}) => {
const {isLoading, filteredProducts, setFilteredProducts, searchTerm, loading, setShow, handleClick} = useGlobalContext()
  const [products, setProducts] = useState([])
   console.log('yer')
          const url =
    'http://localhost:8001/products'
  
        const getProducts =async () => {
       
        isLoading(true)
        try {
        const data = await axios.get(url);
        const newProducts = data.data
        setProducts(newProducts)
        isLoading(false)

        }  catch(error) {
            console.log('ok')
        console.log(error);
        } }

           useEffect(()=> {
           
            getProducts()
        }, [])

                
let filtered  = products.map((item) => { 
            const {title} = item;
            return {...item, title: title.toLowerCase()}})
            .filter((product)=> {
    return product.title.includes(searchTerm.toLowerCase())  
})
    
   useEffect(()=> {
           if (filtered) {
             setFilteredProducts(filtered)
           }
        }, [])

if (loading) {
  return <div className='products'>Loading...</div>
}
return (
 <>

    
 <div className='products'>
    <div className='products-container'>
{filtered.map((product) => {
    const {id, title, description, imageUrl, price, category} = product;
   
       return (
<Product id={id} title={title} description={description} imageUrl={imageUrl} price={price} category={category}></Product>
)}
  )}
</div></div>
 </>
  );
};

export default ProductsContainer;
