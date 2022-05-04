import axios from 'axios'
import React, {useState, useCallback, useContext, useEffect} from 'react'


const AppContext = React.createContext();

const AppProvider = ({children}) => {

        const [loading, isLoading] = useState(false)
        // sets up state for Loading component
     
        const [show, setShow] = useState(false);

        const [cart, setCart] = useState([])
        const [filteredProducts, setFilteredProducts] = useState([])
        const [deleted, setDeleted] = useState(false)
        const [redirect, setRedirect] = useState(false)


   const cartUrl =
    'http://localhost:8001/cart'

         
   const getCart = async () => {
        isLoading(true)
        const data = await axios.get(cartUrl);
        const newCart = data.data
            setCart(newCart)
        isLoading(false)
        return cart       
          .catch(error => {
        console.log(error);
        })}

           useEffect(()=> {
            getCart()
        }, [redirect]) 

         useEffect(()=> {
            getCart()
        }, [deleted]) 


// really bad workaround for an issue i was having. in order to make product search case-insensitive, i  mapped products array (state) to a new array, and converted the title property to lowercase.this new array is then filtered - a check is done against the searchTerm (what is typed in the search box) which is also converted to lowercase. the title of each product is then converted to uppercase later on rendering. 
 

    return<>
    <AppContext.Provider value={{
        loading,
        show,
        setShow,
        cart,
        setCart,
        getCart,
        redirect,
        setRedirect,
        getCart,
        deleted, 
        setDeleted,
        filteredProducts,
        setFilteredProducts

    }}> {children}
    </AppContext.Provider>
    </>
}

export const useGlobalContext = () => {
return useContext(AppContext)
}

export {AppContext, AppProvider}