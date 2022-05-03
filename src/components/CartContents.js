
import React, {useState, useEffect} from 'react';
import { useGlobalContext } from '../context/ProductsContext';



const CartContents = ({children}) => {
const {cart} = useGlobalContext()

return (

 <>
 
  <div className='cart'>
 {cart.map((item => {
   const {cartItem, title, price} = item;
   console.log(item)
  return <div>
    <h2>{title}</h2>
     Quantity: {cartItem.quantity} </div>
 }))}

 </div>

 </>
  );
};

export default CartContents;
