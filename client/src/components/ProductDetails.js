
import React, {useState, useRef, useEffect} from 'react';
import { useGlobalContext } from '../context/Context';
import axios from "axios";    
import { useNavigate, useParams } from "react-router-dom";
import { getByPlaceholderText } from '@testing-library/react';

const Products = () => {
const productId = useParams();
const { products, currentFiltered, product, redirect, setRedirect, cart, setCart, getCart} = useGlobalContext()
    const [singleProductId, setSingleProductId] = useState([])

  const navigate = useNavigate();

  // https://theindispensable.herokuapp.com/products/${productId.productId}

    // get products for product details page
        useEffect(()=> {
            axios.get`https://theindispensable.herokuapp.com/products/${productId.productId}`
           .then(res => {
             console.log(res)
           setSingleProductId([res.data.id])  
                return res
            })
            .catch(err =>{
                console.log(err)
            })
        }, [productId.id])

// send post request to add item to cart, set redirect state to true.
    const handleSubmit =  e => {
    e.preventDefault();
      let request = {method: 'POST',
      url: "https://theindispensable.herokuapp.com/cart",
      headers: {
          'Content-Type': 'application/json'
      },
      data: {
         productId: singleProductId[0]}}

      axios(request) 
      // https://theindispensable.herokuapp.com/products/${productId.productId}
   
                .then(res => {
                  setRedirect(true);
                return res
                })   
        .catch(err => console.log(err))};

        // redirects to Cart page based on whether redirect state is sett to true/false. redirect is then reset to false.
       useEffect(() => {
            if (redirect && (cart != [])) {
              navigate('/cart')
              setRedirect(false)
            }
        }, [redirect])

const productDetails = currentFiltered.filter((product) => {

       return singleProductId == product.id
    })
  return (
<>
 {productDetails.map(product => {
    const {id, title, description, medImageUrl, imageUrl, price, category} = product;
    return (
<div className='product-details-main'>

          <div className='product-details'>
         <h2>{`${title.substring(0, 100)}`.toUpperCase()}</h2>
                      <div className='product-details-image'>

            <img src={medImageUrl} alt="description" />
        </div>  </div>
   

 <div className="product-details-right-sidebar">
<h2>Price: ${price}</h2>

<p>{description}
</p>

<button onClick={handleSubmit}>Add to cart</button>


</div>
</div>
  ) })}      
   

    
</>
  );
};

export default Products;



