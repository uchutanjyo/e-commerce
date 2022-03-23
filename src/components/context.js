
import React, {useState, useCallback, useContext, useEffect} from 'react'

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
// api where data will be fetched from

const AppContext = React.createContext();

const AppProvider = ({children}) => {

        const [loading, isLoading] = useState(false)
        // sets up state for Loading component
        const [searchTerm, setSearchTerm] = useState('')
        const [cocktails, setCocktails] = useState([])
    
        const fetchDrinks = useCallback(async() => {
            // useCallback - prevents infinite loop 
            try {
                const response = await fetch (`${url}${searchTerm}`)
                // fetches data from url - initial call on initial render has searchTerm's state set to an empty string, so, the data fetched will not be search-specific - just an array of 25 drink objects.
                const data = await response.json()
                const {drinks} = data;
                // creates a new object 'drinks' with data array
                console.log({drinks})
                if ({drinks}) {
                   const newCocktails = drinks.map((drink)=> {
                        const {idDrink,strDrink, strAlcoholic, strDrinkThumb, strGlass} = drink;
                    // creates new variable newCocktails - maps 'drinks' array, destructures specific properties from each drink
                        return {id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass}
                        // returns newCocktails as a new object with each destructured property used as value with new key names
                    })
                    setCocktails(newCocktails)
                    // sets cocktails state to newCocktails array
                }  else {
                    setCocktails([])
                    // if no data fetched, keep cocktails state an empty array
                }
            }
            catch (error) {
                console.log(error)
            }
        }, [searchTerm])

        useEffect(() => {fetchDrinks()
}, [searchTerm])
// fetchDrinks called on initial render and every time the searchTerm is changed (functionality in SearchForm.js)

    return<>
    <AppContext.Provider value={{
        loading,
        searchTerm,
        cocktails,
        setSearchTerm
    }}> {children}
    </AppContext.Provider>
    </>
}

export const useGlobalContext = () => {
return useContext(AppContext)
}

export {AppContext, AppProvider}