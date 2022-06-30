import React, { useEffect } from "react";
import { useGlobalContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CartContents = ({ children }) => {
  const {isLoading, cartTotalPrice, appUrl, cart, deleted, setDeleted } = useGlobalContext();

  const navigate = useNavigate();

  // delete cart item
  const handleSubmit = (e) => {
    e.preventDefault();
    // gets id from clicked cart item delete button
    const productId = e.target.id;
    // sends productId as axios POST request to delete-cart route
    let request = {
      method: "POST",
      url: `${appUrl}/delete-cart`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        productId: productId,
      },
    };
    axios(request)
      .then((res) => {
      // sets deleted boolean to true, returns response
        setDeleted(true);
        return res;
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // when deleted set to true, navigate back to cart. Set deleted to false.
    if (deleted) {
      navigate("/cart");
      setDeleted(false);
    }
  }, [deleted]);

  if (isLoading) {
    // while loading data, display Loading..
    return  <div className="cart">
    <div className="your-cart"><h1>Loading...</h1></div></div>
  }
  // render cart: total price, map each cart item including title, price, qty, image, and delete button (handleSubmit)
  return (
    <>
      <div className="cart">
        <div className="your-cart">
          <h2> Your Cart</h2>
          <h3>Total price: ${cartTotalPrice}.00</h3>
        </div>
        {cart.map((item) => {
          const { id, cartItem, title, price, imageUrl } = item;
          return (
            <div key={id} className="cart-item">
              <div className="cart-item-left">
                <h2>{title}</h2>
                <h4>Quantity: {cartItem.quantity}</h4>
                <h4>Price: ${price}.00</h4><br/><br/> 
                <button
                  id={id}
                  onClick={handleSubmit}
                  className="default-button"
                >
                  Remove
                </button>
              </div>
              <div className="cart-item-right">
                <img src={imageUrl} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartContents;
