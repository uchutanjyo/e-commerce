import React, {useState, useEffect} from 'react';
import ProductsContainer from './components/ProductsContainer';
import { useGlobalContext } from './context/Context';
import SearchForm from './components/SearchForm';

const Products = ({product}) => {

    const [productId, setProductId] = useState('')
const {show, setShow, products, currentFiltered, category, setCategory} = useGlobalContext()

const categories = ['Kitchen', 'Home Decor', 'Books']

const handleClick = (category) => {
  console.log(category)
  setCategory(category)

}

  return (

<>

 <div className="categories-sidebar">
 <h2>Categories</h2>
   <ul>
     <li>All</li>
{categories.map((cat)=> {
return <li onClick={() => handleClick(cat)}>{cat}</li>
})}
</ul>
  

   </div>
<div className='products-title'>
     <SearchForm></SearchForm>
    <h5>
     {currentFiltered.length} products found!</h5>
     * search function temporarily under construction!
</div> 

     <ProductsContainer />
</>
  );
};

export default Products;
