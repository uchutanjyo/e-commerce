
import React, {useState, useRef, useEffect} from 'react';
import { useGlobalContext } from '../context/ProductsContext';
import axios from "axios";    
import { useNavigate, useParams } from "react-router-dom";
import { getByPlaceholderText } from '@testing-library/react';

const Products = () => {
const productId = useParams();
const { products, product, filtered, redirect, setRedirect, cart, setCart, getCart} = useGlobalContext()
    const [singleProductId, setSingleProductId] = useState([])

  const navigate = useNavigate();

    // get products for products page
        useEffect(()=> {
            axios.get(`http://localhost:8001/products/${productId.productId}`)
            .then(res => {
        return res
           }).then(res => {
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
    setRedirect(true)
    let request = {method: 'POST',
            url: "http://localhost:8001/cart",
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
               productId: singleProductId[0]}}
            axios(request)
                .then(res => {
                return res
                })   
        .catch(err => console.log(err))};

        // redirects to Cart page based on whether redirect state is sett to true/false. redirect is then reset to false.
       useEffect(() => {
            if (redirect) {
              navigate('/cart')
              setRedirect(false)
            }
        }, [cart])

    //     // on pageload, make sure redirect is set to false
    //    useEffect(() => {
    //         if (redirect) {
    //           setRedirect(false)
    //         }
    //     }, [])


const productDetails = filtered.filter((product) => {
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



