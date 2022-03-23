import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from "./context";

const CocktailList = () => {
  const {loading, cocktails} = useGlobalContext();
  // loading, cocktails state taken from global context. cocktails in this case will either be the initial 25 cocktails fetched or those matching the searchTerm.
console.log(cocktails)

  if (loading) {
    return (
    <div>
<Loading></Loading>  
  </div>
  )
 
}
 if (cocktails.length <1  ) {
   return (
     <div>no cocktails matched your search critera</div>
   )
 } 
 else {
  return (
<div>
  <h1>Cocktails</h1>
{cocktails.map((cocktail)=> {
 return  <Cocktail key={cocktail.id} {...cocktail}  ></Cocktail>
})}
{/* maps each cocktail from cocktails state (array), returns a Cocktail component with the key set as cocktail id and the rest of the cocktail properties destructured  */}
</div> )
 }
}

export default CocktailList
