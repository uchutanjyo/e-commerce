import React, {useState, useEffect} from 'react'
import Loading from './components/Loading'
import { useParams,  Link } from 'react-router-dom'
import Cocktail from './components/Cocktail'
import Main from './components/Main'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
    const [loading, setLoading] = useState(false)
    const [cocktail, setCocktail] = useState(null)

  const {id} = useParams();

useEffect(() => {
      setLoading(true)

async function getCocktail() {
  
  try {
    const response = await fetch(`${url}${id}`)
    const data = await response.json();
    if (data.drinks) {
     const { strDrink: name } = data.drinks[0]
     const newCocktail = {name}
     setCocktail(newCocktail)
    }
    else {
      setCocktail(null)
    }
setLoading(false)

  }
  catch(error) {
console.log(error) 
      setLoading(false)
  }
}
  getCocktail()

}, [id])
if (loading) {
    return (
<Loading/>
    )
} if (!cocktail) {
  return (
    <div>
      <Main>
      <h2>no cocktail to display </h2>
      </Main>
    </div>
  )
} else {
  const {name} = cocktail;
  return (
    <div>
      <Main>
      <h2>{name} </h2>
      </Main>
    </div>
  )
}}

export default SingleCocktail
