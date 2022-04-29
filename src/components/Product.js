import React from 'react';


const Product = ({id, title, price, imageUrl, category, description, handleClick, children}) => {
  return (
 <div key={id} className='product'>
         <h4>{`${title.substring(0, 100)}`.toUpperCase()}</h4>
          <h5> ${price}</h5>
          <img onClick={handleClick} src={imageUrl} alt={description} />
          <section className='description'>
            <div>{category}</div>
         </section></div>

  );
};

export default Product;
