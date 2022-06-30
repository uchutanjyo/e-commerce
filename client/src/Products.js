import React, { useState, useEffect } from "react";
import ProductsContainer from "./components/ProductsContainer";
import { useGlobalContext } from "./context/Context";
import SearchForm from "./components/SearchForm";

const Products = () => {
  const { setLoadingToTrue, currentFiltered, setCategory } = useGlobalContext();

  const categories = ["Kitchen", "Home Decor", "Books", "Music", "Other"];

  const handleClick = (category) => {
    setCategory(category);
  };

  const resetCategory = () => {
    setCategory("");
  };

  return (
    <>
      <div className="products-wrapper">
        <div className="categories-sidebar">
          <h2>Categories</h2>
          <ul>
            <li onClick={resetCategory}>All</li>
            {categories.map((cat) => {
              return <li key={cat} onClick={() => handleClick(cat)}>{cat}</li>;
            })}
          </ul>
        </div>
        <div className="products-title">
          <SearchForm />
          <h5>{currentFiltered.length} products found!</h5>
        </div>
        <ProductsContainer />
      </div>
    </>
  );
};

export default Products;
