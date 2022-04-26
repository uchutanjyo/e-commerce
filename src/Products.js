import React, {useState, useEffect} from 'react';
import ProductsContainer from './components/ProductsContainer';
import { useGlobalContext } from './context/ProductsContext';


const Products = ({product}) => {

    const [productId, setProductId] = useState('')
const {show, setShow, products} = useGlobalContext()




  return (

<>
             <div className='top-banner'>
        <h1>PRODUCTS
     </h1></div>

     <ProductsContainer>


     </ProductsContainer>

</>
  );
};

export default Products;
