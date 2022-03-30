
import React, {useState, useEffect} from 'react';
import { useGlobalContext } from '../context/ProductsContext';
import SearchForm from './SearchForm';
import reducer from '../context/reducer';


const CartContents = ({children}) => {
const {products, setProducts, searchTerm, loading,getProducts, filtered} = useGlobalContext()




if (loading) {
  return <div className='products'>Loading...</div>
}

return (

 <>
 
  <div className='products-title'>


 </div>

 </>
  );
};

export default CartContents;
