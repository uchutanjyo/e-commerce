import React, { useState, useEffect } from "react";
import ProductDetails from "./components/ProductDetails";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className="details-wrapper">
        <div className="product-details-left-sidebar">
          <Link to="/products" className="back">
            <h3>Back to products</h3>
          </Link>
        </div>
        <ProductDetails></ProductDetails>
      </div>
    </>
  );
};

export default Products;
