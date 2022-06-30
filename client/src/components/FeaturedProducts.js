import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

const FeaturedProducts = ({ children }) => {
  const { isLoading, currentFiltered, products, getProducts } = useGlobalContext();

  const [featuredProduct, setFeaturedProduct] = useState("");

  // gets random product out of products array (fetched in Context.js)
  const getRandomProduct = (products) => {
    let randomProduct = products[Math.floor(Math.random() * products.length)];
    return randomProduct;
  };

  // on page render, getProducts (fetched in Context.js)
  useEffect(() => {
    getProducts();
  }, []);
  
  // when getProducts() called initially, set featured product state to return value of getRandomProduct
  useEffect(() => {
      setFeaturedProduct(getRandomProduct(products));    
  }, [products]);

  // while loading data, display Loading..
  if (isLoading) {
    return  <div className="cart">
       <div className="featured-products"><h1>Loading...</h1></div></div>
  }
  // render featured products section - product of the day links to that product's details page
  return (
    <div className="featured-products">
      <div className="left">
        <h1>Today's featured product</h1>
        <p>
          Check out our featured product of the day (subject to change on page
          refresh). We would appreciate it very much if you bought one or more
          of this item, today. Thanks so much in advance!
        </p>
        <Link to="/Products" className="Navbar-link">
          <button className="default-button">See all products</button>{" "}
        </Link>
      </div>
      
      <div className="right" id="featured-right">
      <div className="featured-product">
       <Link to={`/${featuredProduct.id}/productdetailspage`}>
       <img src={featuredProduct.medImageUrl} />
        </Link>  
        </div></div>
    </div>
  );
};

export default FeaturedProducts;
