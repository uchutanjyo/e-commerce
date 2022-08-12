import React, { useEffect } from "react";
import CartContents from "./components/CartContents";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  }, []);

  return (
    <>
      <CartContents></CartContents>
    </>
  );
};

export default Cart;
