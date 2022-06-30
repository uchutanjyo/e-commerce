import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context/Context";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Products = () => {
  // useParams connects productId to ProductDetailsPage - pulls unique id from url
  const productId = useParams();

  const {
    appUrl,
    currentFiltered,
    redirect,
    setRedirect,
    cart,
    setIsLoading,
    isLoading,
  } = useGlobalContext();

  const [singleProductId, setSingleProductId] = useState([]);

  const navigate = useNavigate();

  const localHost = 4000;

  // get products for product details page
  useEffect(() => {
    axios
      .get(`${appUrl}/products/${productId.productId}`)
      .then((res) => {
        console.log(isLoading)
        setSingleProductId([res.data.id]);
        setIsLoading(false)
        return res;
      })
  
      .catch((err) => {
        console.log(err);
      });
  }, [productId.id]);

  // send post request to add item to cart, set redirect state to true.
  const handleSubmit = (e) => {
    setIsLoading(true)
    e.preventDefault();
    let request = {
      method: "POST",
      url: `${appUrl}/cart`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        productId: singleProductId[0],
      },
    };

    axios(request)
      .then((res) => {
        setRedirect(true);
        return res;
      })
      .catch((err) => console.log(err));
  };

  // redirects to Cart page based on whether redirect state is sett to true/false. redirect is then reset to false.
  useEffect(() => {
    if (redirect && cart != []) {
      navigate("/cart");
      setRedirect(false);
    }
  }, [redirect]);

  const productDetails = currentFiltered.filter((product) => {
    return singleProductId == product.id;
  });

  if (isLoading) {
    return <div className="product-details-main">
                  <div className="product-details">
                  <div className="product-details-image"><h1>Loading...</h1></div></div></div>
  }
  return (
    <>
      {productDetails.map((product) => {
        const {
          id,
          title,
          description,
          medImageUrl,
          imageUrl,
          price,
          category,
        } = product;
        return (
          <div className="product-details-main">
            <div className="product-details">
              <h2>{`${title.substring(0, 100)}`.toUpperCase()}</h2>
              <div className="product-details-image">
                <img src={medImageUrl} alt="description" />
              </div>
            </div>

            <div className="product-details-right-sidebar">
              <h2>Price: ${price}</h2>

              <p>{description}</p>

              <button onClick={handleSubmit}>Add to cart</button>
            </div>
          </div>
        );
      })}{" "}
    </>
  );
};

export default Products;
