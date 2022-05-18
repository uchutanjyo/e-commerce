
import React from 'react';
import { useGlobalContext } from '../context/Context';
import Product from './Product'

const ProductsContainer = ({children}) => {
const {loading, currentFiltered, setCurrentFiltered, searchTerm} = useGlobalContext()

if (loading) {
  return <div className='products'>Loading...</div>
}
return (
 <>

 <div className='products'>
    <div className='products-container'>
{currentFiltered.map((product) => {
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
