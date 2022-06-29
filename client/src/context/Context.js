import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  const [cart, setCart] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState('0');


  const [deleted, setDeleted] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const [category, setCategory] = useState("");

  const [currentFiltered, setCurrentFiltered] = useState([]);

  const appUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : "https://theindispensable.herokuapp.com";

  const cartUrl = "https://theindispensable.herokuapp.com/cart";

  const getCart = async () => {
    setIsLoading(true);
    const data = await axios.get(`${appUrl}/cart`);
    const newCart = data.data;
    setCart(newCart);
    setIsLoading(false);
    // feeling proud-having coded the following 'totalPrice' solution from scratch (June 6, 2022)
    const totalPrices = []
   data.data.map((product) => {
      const eachProduct = product.price * product.cartItem.quantity;
      totalPrices.push(eachProduct)
    })
      const totalPrice = totalPrices.reduce((acc, item) => {
        return acc +=  item;
   })
  setCartTotalPrice(totalPrice)
    return cart
    .catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    if (cart != []) {
      getCart();
    }
  }, [redirect]);

  useEffect(() => {
    getCart();
  }, [deleted]);

  useEffect(() => {
    if (cart.length == 0) {
      setCartTotalPrice('0')
    }
  }, [cart, cartTotalPrice]);


  const getProducts = async () => {
    setIsLoading(true);
    try {
      const data = await axios.get(`${appUrl}/products`);
      const newProducts = data.data;
      setProducts(newProducts);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

    // really bad workaround for an issue i was having. in order to make product search case-insensitive, i  mapped products array (state) to a new array, and converted the title property to lowercase.this new array is then filtered - a check is done against the searchTerm (what is typed in the search box) which is also converted to lowercase. the title of each product is then converted to uppercase later on rendering.
  useEffect(() => {
    let filtered = products
      .map((item) => {
        const { title } = item;
        return { ...item, title: title.toLowerCase() };
      })
      .filter((product) => {
        if (category != "") {
          return product.category === category;
        } else return product;
        {
        }
      })
      .filter((searchedProduct) => {
        if (searchTerm != "") {
          return searchedProduct.title.includes(searchTerm.toLowerCase());
        } else {
          return searchedProduct;
        }
      });
    setCurrentFiltered(filtered);
  }, [products, category, searchTerm])

  const setLoadingToTrue = () => {
    setIsLoading(true)
  }

  return (
    <>
      <AppContext.Provider
        value={{
          setLoadingToTrue,
          setIsLoading,
          isLoading,
          searchTerm,
          products,
          setSearchTerm,
          getProducts,
          show,
          setShow,
          cart,
          setCart,
          getCart,
          redirect,
          setRedirect,
          deleted,
          setDeleted,
          category,
          setCategory,
          currentFiltered,
          setCurrentFiltered,
          appUrl,
          cartTotalPrice
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
