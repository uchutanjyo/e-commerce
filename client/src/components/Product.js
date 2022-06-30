import React from "react";
import { Link } from "react-router-dom";

// props passed to ProductsContainer component
const Product = ({
  id,
  title,
  price,
  imageUrl,
  category,
  description,
  handleClick,
  children,
}) => {

  // return Product component - title is changed to upper case to ___
  return (
    <div key={id} className="product">
      <Link to={`/${id}/productdetailspage`}>
        <h4>{`${title.substring(0, 100)}`.toUpperCase()}</h4>
      </Link>
      <h5> ${price}</h5>
      <Link to={`/${id}/productdetailspage`}>
        <img onClick={handleClick} src={imageUrl} alt={description} />
      </Link>
      <section className="description"></section>
    </div>
  );
};

export default Product;
