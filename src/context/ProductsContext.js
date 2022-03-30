import axios from 'axios'
import React, {useState, useCallback, useContext, useEffect} from 'react'
import reducer from './reducer'

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




let filtered  = products.map((item) => { 
            const {title} = item;
            return {...item, title: title.toLowerCase()}})
            .filter((product)=> {
    return product.title.includes(searchTerm.toLowerCase())  
})

// really bad workaround for an issue i was having. in order to make product search case-insensitive, i  mapped products array (state) to a new array, and converted the title property to lowercase.this new array is then filtered - a check is done against the searchTerm (what is typed in the search box) which is also converted to lowercase. the title of each product is then converted to uppercase later on rendering. 

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