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
      console.log(data.drinks)
     const { strDrink: name, 
      strDrinkThumb,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10} = data.drinks[0]
      const ingredients = [ strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10]
     const newCocktail = {
       name,
      strDrinkThumb,
      ingredients}
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
            <Main>

<Loading/>
      </Main>

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
  const {name, strDrinkThumb, ingredients} = cocktail;
  return (
    <div>
      <Main>
      <h2>{name}</h2>
  <img className='img' src={strDrinkThumb} alt="" /> 
  <div>ingredients:
{ingredients.map((ingredient,index) => {
    return <section key={index}>{ingredient ? ingredient : null}</section>
})}    </div>
      </Main>
    </div>
  )
}}

export default SingleCocktail
