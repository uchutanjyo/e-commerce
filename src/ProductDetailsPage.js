
import React, {useState, useEffect} from 'react';
import ProductsContainer from './components/ProductsContainer';
import { useGlobalContext } from './context/ProductsContext';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails'
import axios from "axios";    
import { useParams } from "react-router-dom";



const Products = () => {


  return (

<>

    <ProductDetails></ProductDetails>

</>
  );
};

export default Products;



