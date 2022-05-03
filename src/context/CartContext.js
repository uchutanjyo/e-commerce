import axios from 'axios'
import React, {useState, useCallback, useContext, useEffect} from 'react'
import reducer from './reducer'

const AppContext = React.createContext();

const AppProvider = ({children}) => {

        const [loading, isLoading] = useState(false)
       

// really bad workaround for an issue i was having. in order to make product search case-insensitive, i  mapped products array (state) to a new array, and converted the title property to lowercase.this new array is then filtered - a check is done against the searchTerm (what is typed in the search box) which is also converted to lowercase. the title of each product is then converted to uppercase later on rendering. 
 

    return<>
    <AppContext.Provider value={{
        loading
        // handleClick

    }}> {children}
    </AppContext.Provider>
    </>
}

export const useGlobalContext = () => {
return useContext(AppContext)
}

export {AppContext, AppProvider}