import React from 'react';


const FeaturedProducts = ({children}) => {
  return (

    <div className='contact'>
<h1>Contact us</h1>
<form action="submit">
    <h2>Inquiries? Fill out your personal information and your question here and we'll get back to you ASAP.</h2>
    <label htmlFor="name">Name</label>
    <input type="text" id='name'/>
</form>
    </div>
  );
};

export default FeaturedProducts;
