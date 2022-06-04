import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

const FeaturedProducts = ({ children }) => {
  const { currentFiltered, products, getProducts } = useGlobalContext();

  const [featuredProduct, setFeaturedProduct] = useState("");
  const [loadingFeaturedProduct, setLoadingFeaturedProduct] = useState(false);

  const getRandomProduct = (products) => {
    let randomProduct = products[Math.floor(Math.random() * products.length)];
    return randomProduct;
  };

  useEffect(() => {
    getProducts();
    setLoadingFeaturedProduct(true);
  }, []);
  
  useEffect(() => {
    console.log(loadingFeaturedProduct);
    if (loadingFeaturedProduct) setFeaturedProduct(getRandomProduct(products));
  }, [products]);

  return (
    <div className="featured-products">
      <div className="left">
        <h1>Today's featured products</h1>
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
        <Link to={`/${featuredProduct.id}/productdetailspage`}>
          <img src={featuredProduct.medImageUrl} />{" "}
        </Link>

        {/* <img src="https://images.unsplash.com/photo-1648285618065-3d421fa03e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></img> */}
      </div>
    </div>
  );
};

export default FeaturedProducts;
