
import React, {useState, useEffect} from 'react';
import { useGlobalContext } from '../context/ProductsContext';
import axios from "axios";    
import { useParams } from "react-router-dom";


const Products = () => {
const productId = useParams();

    // const [productId, setProductId] = useState('')
const { products, product, filtered } = useGlobalContext()
    const [singleProductId, setSingleProductId] = useState([])


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

console.log(singleProductId[0], 'OKOK')

    const handleSubmit = e => {
    e.preventDefault();
console.log('OH', singleProductId[0])
let request = {method: 'POST',
            url: "http://localhost:8001/cart",
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
               productId: singleProductId[0]}}
console.log(request)
    axios(request)
     .then(response => {
       console.log(response, 'ASD')
      return response })    
      .then(res => console.log(res)).
    catch(err => console.log(err))  };


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



