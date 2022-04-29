
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
    const [productDetails, setProductDetails] = useState([])


        useEffect(()=> {
            axios.get(`http://localhost:8001/products/${productId.productId}`)
            .then(res => {
        return res
           }).then(res => {
                        console.log(res.data.id,'QQ')
                     setProductDetails([res.data.id])
                return res
            })
            .catch(err =>{
                console.log(err)
            })
        }, [productId.id])

const newProduct = filtered.filter((product) => {
            console.log(product.id, productDetails[0])
       return productDetails == product.id
    })

    console.log(newProduct)
  return (

<>
       <div className='left'>
    {newProduct.map(product => {
    const {id, title, description, imageUrl, price, category} = product;
    return <Product id={id} title={title} description={description} imageUrl={imageUrl} price={price} category={category}></Product>
    })}
          
       </div>
     
</>
  );
};

export default Products;



