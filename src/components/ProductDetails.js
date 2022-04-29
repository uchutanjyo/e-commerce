
import React, {useState, useEffect} from 'react';
import ProductsContainer from './ProductsContainer';
import { useGlobalContext } from '../context/ProductsContext';
import Product from './Product';

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

const productDetails = filtered.filter((product) => {
       return singleProductId == product.id
    })
  return (
<>
       <div className='product-details-main'>
    {productDetails.map(product => {
        console.log(product)
    const {id, title, description, medImageUrl, imageUrl, price, category} = product;
    return (
        <div className='product-details'>
                        <img src={medImageUrl} alt={description}/>

        </div>
    )
    })}
    </div>
</>
  );
};

export default Products;



