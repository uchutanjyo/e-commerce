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

  /* function sets isLoading state to true, makes axios GET request to cart route, stores in data variable
      sets newCart to data property of axios response
      sets cart state to newCart, sets isLoading to false
  */
      const getCart = 
      async () => {
        try {
        setIsLoading(true);
        const data = await axios.get(`${appUrl}/cart`);
        const newCart = data.data;
        setCart(newCart);
        setIsLoading(false);
    
        // feeling proud-having coded the following 'totalPrice' solution from scratch w/o reference to anything (June 6, 2022)
        const totalPrices = []
       /* maps cart product property from each data object
          sets eachProduct to the price of each cart product * the qty of each product in the cart
          pushes eachProduct to empty totalPrices array
        */
       
        data.data.map((product) => {
        const eachProduct = product.price * product.cartItem.quantity;
        totalPrices.push(eachProduct)
        })
        // reduce totalPrices array to sum totalPrice
    
            const totalPrice = totalPrices.reduce((acc, item) => {
            return acc +=  item }, []
       )
        // set cartTotalPrice state to return value of totalPrice
      setCartTotalPrice(totalPrice) 
        return cart
      }
        catch (error)  {
          console.log(error);
        };
      };

  // when redirect or deleted set to true in ProductDetails, call getCart() in order to display cart on redirect/refresh cart contents
  useEffect(() => {
      getCart();
  }, [redirect, deleted]);

  // when cart or cartTotalPrice state change, and IF cart.length is 0 (no items), set cartTotalPrice to 0.
  useEffect(() => {
    if (cart.length === 0) {
      setCartTotalPrice('0')
    }
  }, [cart, cartTotalPrice]);

/* function sets isLoading state to true, makes axios GET request to products route, stores in data variable
      sets newProducts variable to data property of axios response
      sets products state to newProducts, sets isLoading to false
  */
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

  // on initial page render, call getProducts() to display all products
  useEffect(() => {
    getProducts();
  }, []);

  /* A bad workaround for an issue i was having
  Whenever products, category or searchTerm state changes, in order to make product search case-insensitive, products array is mapped to a new array, and title is converted to lowercase
  This new array is then filtered, and a check is done against the searchTerm (what is typed in the search input) which is also converted to lowercase. The title of each product is then converted to uppercase later on page render.
  */
  useEffect(() => {
    let filtered = products
      .map((item) => {
        const { title } = item;
        return { ...item, title: title.toLowerCase() };
      })
      .filter((product) => {
        if (category !== "") {
          return product.category === category;
        } else return product;
      })
      .filter((searchedProduct) => {
        if (searchTerm !== "") {
          return searchedProduct.title.includes(searchTerm.toLowerCase());
        } else {
          return searchedProduct;
        }
      });
    setCurrentFiltered(filtered);
  }, [products, category, searchTerm])

  // function which sets isLoading state to true, which is shared across several components in order to render 'Loading..' while data is being fetched
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
