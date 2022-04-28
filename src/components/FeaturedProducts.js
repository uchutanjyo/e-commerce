import React from 'react';


const FeaturedProducts = ({children}) => {
  return (
    <div className='featured-products'>
<div className='left'>
    <h1>Today's featured products</h1>
    <p>On the right, check out all of our featured products. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem voluptates vero aliquid. Labore voluptate saepe, accusamus itaque voluptas dolorem officiis nostrum fugit deleniti adipisci, harum, at tempore necessitatibus id?</p>
    <button className='default-button'><h3>See all products</h3></button>
</div>
<div className='right'>
    <img src="https://images.unsplash.com/photo-1648285618065-3d421fa03e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></img>

</div>
<div>{children}</div>
    </div>
  );
};

export default FeaturedProducts;
