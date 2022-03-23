
import React, {useState, useCallback, useContext, useEffect} from 'react'

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const AppContext = React.createContext();

const AppProvider = ({children}) => {

        const [loading, isLoading] = useState(false)
        const [searchTerm, setSearchTerm] = useState('')
        const [cocktails, setCocktails] = useState([])
    
        const fetchDrinks = useCallback(async() => {
            try {
                const response = await fetch (`${url}${searchTerm}`)
                const data = await response.json()
                const {drinks} = data;
                if ({drinks}) {
                   const newCocktails = drinks.map((drink)=> {
                        const {idDrink,strDrink, strAlcoholic, strDrinkThumb, strGlass} = drink;

                        return {id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass}
                    })
                    setCocktails(newCocktails)
                }  else {
                    setCocktails([])
                }
            }
            catch (error) {
                console.log(error)
            }
        }, [searchTerm])

        useEffect(() => {fetchDrinks()
}, [searchTerm])

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