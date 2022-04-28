import React, {useState, useEffect} from 'react';
import ProductsContainer from './components/ProductsContainer';
import { useGlobalContext } from './context/ProductsContext';
import SearchForm from './components/SearchForm';

const Products = ({product}) => {

    const [productId, setProductId] = useState('')
const {show, setShow, products, filtered} = useGlobalContext()

  return (

<>
 <div className="categories-sidebar">
     <h2>Categories</h2>
   <ul>
     <li>Home</li>
    <li>Kitchen</li>
     <li>Music equipment</li>
     <li>Electronics</li>
     <li>Food</li>
     <li>Misc</li>
   </ul>
   </div>
<div className='products-title'>
     <SearchForm></SearchForm>
    <h5>
     {filtered.length} products found!</h5></div> 
     <ProductsContainer />
</>
  );
};

export default Products;
