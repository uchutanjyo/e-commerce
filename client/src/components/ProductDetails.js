import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context/Context";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
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

  // makes axios GEt request to fetch product for product details page, using productId pulled from router url (useParams)
  useEffect(() => {
    axios
      .get(`${appUrl}/products/${productId.productId}`)
      .then((res) => {
  // set singleProductId state to the data.id property from the axios response
        setSingleProductId([res.data.id]);
        setIsLoading(false)
        return res;
      })
  
      .catch((err) => {
        console.log(err);
      });
  }, [productId.id]);

  // send singleProductId POST request to cart route to add item to cart, set redirect state to true.
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

  // redirect to Cart page when redirect boolean set to true; redirect then reset to false
  useEffect(() => {
    if (redirect && cart !== []) {
      navigate("/cart");
      setRedirect(false);
    }
  }, [redirect]);

    // filters currentFiltered array, returns product id that is equal to singleProductId (to map to ProductDetails component)
  const productDetails = currentFiltered.filter((product) => {
    return singleProductId == product.id;
  });

  // while loading data, display Loading..
  if (isLoading) {
    return <div className="product-details-main">
                  <div className="product-details">
                  <div className="product-details-image"><h1>Loading...</h1></div></div></div>
  }
  // render mapped productDetails data 
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
          <div key={id} className="product-details-main">
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

export default ProductDetails;
