
import React, {useState, useEffect} from 'react';
import ProductsContainer from './components/ProductsContainer';
import { useGlobalContext } from './context/ProductsContext';
import Product from './components/Product';

import axios from "axios";    
import { useParams } from "react-router-dom";

const params = useParams();
    
    const [products, setProducts] = useState([])
    
        useEffect(()=> {
            axios.get(`http://localhost:8001/posts/${params.id}`)
            .then(res => {
                console.log(res)
                setProducts(res.data)
                console.log(products)
                
            })
            .catch(err =>{
                console.log(err)
            })
        }, [params.id])



const Products = () => {

    const [productId, setProductId] = useState('')
const { products, product} = useGlobalContext()




  return (

<>
             <div className='top-banner'>
        <h1>PRODUCTS
     </h1>
     <Product 
     
     product={product}>
{products.map((product) => {
const {id, title, description, price, image, handleClick} = product;
 console.log(product.id, productId, 'OOASD')
   if( product.id == productId) {
    
return (
<div className="product"key={id}> 
<h2 className='product-title'>{title}</h2>
{/* <div className='product-release'>{release}</div> */}
<img src={image} alt={title} />
<div className='product-info'>{description}</div>
<button onClick={handleClick}>close</button>   

</div>
)}
})}
       
     </Product>
     </div>
</>
  );
};

export default Products;



