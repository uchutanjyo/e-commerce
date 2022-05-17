import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import  { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/Context';


const FeaturedProducts = ({children}) => {
  const {currentFiltered} = useGlobalContext()


  const [featuredProduct, setFeaturedProduct] = useState('')


console.log(featuredProduct)


  return (
    <div className='featured-products'>
<div className='left'>
    <h1>Today's featured products</h1>
    <p>On the right, check out our featured product of the day. We would appreciate it very much if you bought one or more of this item, today. Thanks so much in advance!</p>
 <Link to="/Products" className='Navbar-link'>
<button className='default-button'><h3>See all products</h3></button>
 </Link>

      
</div>
<div className='right'>

 <div><img src={featuredProduct.medImageUrl}/></div>




    <img src="https://images.unsplash.com/photo-1648285618065-3d421fa03e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></img>

</div>
<div>{children}</div>
    </div>
  );
};

export default FeaturedProducts;
