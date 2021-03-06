import React from "react";
import { useGlobalContext } from "../context/Context";
import Product from "./Product";

const ProductsContainer = ({ children }) => {
  const { setLoadingToTrue, isLoading, setIsLoading, currentFiltered } =
    useGlobalContext();

 // while loading data, display Loading..
  if (isLoading) {
    return <div className="products"><h1>Loading...</h1></div>;
  }
  // render mapped currentFiltered array to display each product in a Product component
  return (
    <>
      <div className="products">
        <div className="products-container">
          {currentFiltered.map((product) => {
            const { id, title, description, imageUrl, price, category } =
              product;
            return (
              <Product
                key={id}
                id={id}
                title={title}
                description={description}
                imageUrl={imageUrl}
                price={price}
                category={category}
                handleClick={setLoadingToTrue}
              ></Product>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsContainer;
