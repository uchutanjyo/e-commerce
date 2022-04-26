
import React, {useState, useEffect} from 'react';
import ProductsContainer from './components/ProductsContainer';
import { useGlobalContext } from './context/ProductsContext';
import SingleProduct from './components/SingleProduct';


const Products = () => {

    const [productId, setProductId] = useState('')
const { products, product} = useGlobalContext()




  return (

<>
             <div className='top-banner'>
        <h1>PRODUCTS
     </h1>
     <SingleProduct 
     
     product={product}>
{products.map((product) => {
const {id, title, description, price, image, handleClick} = product;
 console.log(product.id, productId)
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
       
     </SingleProduct>
     </div>






</>
  );
};

export default Products;





