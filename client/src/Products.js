import React, {useState, useEffect} from 'react';
import ProductsContainer from './components/ProductsContainer';
import { useGlobalContext } from './context/Context';
import SearchForm from './components/SearchForm';

const Products = ({product}) => {

    const [productId, setProductId] = useState('')
const {show, setShow, products, currentFiltered, category, setCategory} = useGlobalContext()

const categories = ['Kitchen', 'Home Decor', 'Books']

const handleClick = (category) => {
  setCategory(category)
}

const resetCategory = () => {
  setCategory('')
}

  return (

<>

 <div className="categories-sidebar">
 <h2>Categories</h2>
   <ul>
     <li onClick={resetCategory}>All</li>
{categories.map((cat)=> {
return <li onClick={() => handleClick(cat)}>{cat}</li>
})}
</ul>
  

   </div>
<div className='products-title'>
     <SearchForm></SearchForm>
    <h5>
     {currentFiltered.length} products found!</h5>
</div> 

     <ProductsContainer />
</>
  );
};

export default Products;
