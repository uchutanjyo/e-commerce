import axios from 'axios'
import React, {useState, useCallback, useContext, useEffect} from 'react'

const url ='https://fakestoreapi.com/products/category/electronics';
// api where data will be fetched from

const AppContext = React.createContext();

const AppProvider = ({children}) => {

        const [loading, isLoading] = useState(false)
        // sets up state for Loading component
        const [searchTerm, setSearchTerm] = useState('')
        const [products, setProducts] = useState([])

    
        const getProducts =async () => {
        isLoading(true)
        try {
        const data = await axios.get(url);
        const newProducts = data.data;
        setProducts(newProducts)
        isLoading(false)
        }  catch(error) {
        console.log(error);
        } }

        let oldProducts = products;

let filtered = products.filter((product)=> product.title.includes(searchTerm))

        useEffect(()=> {
            getProducts()
        }, [])

      

        

    return<>
    <AppContext.Provider value={{
        loading,
        searchTerm,
        products,
        setProducts,
        setSearchTerm,
        getProducts,
        filtered
    }}> {children}
    </AppContext.Provider>
    </>
}

export const useGlobalContext = () => {
return useContext(AppContext)
}

export {AppContext, AppProvider}