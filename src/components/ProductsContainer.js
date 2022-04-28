
import React, {useState, useEffect} from 'react';
import { useGlobalContext } from '../context/ProductsContext';
import SearchForm from './SearchForm';
import Product from './Product'

const ProductsContainer = ({children}) => {
const {products, setProducts, searchTerm, loading,getProducts, filtered, setShow, handleClick} = useGlobalContext()

if (loading) {
  return <div className='products'>Loading...</div>
}
return (
 <>

    
 <div className='products'>
    <div className='products-container'>
{filtered.map((product) => {
    const {id, title, description, imageUrl, price} = product;
   
       return (
<Product id={id} title={title} description={description} imageUrl={imageUrl} price={price}></Product>
)}
  )}
</div></div>
 </>
  );
};

export default ProductsContainer;
