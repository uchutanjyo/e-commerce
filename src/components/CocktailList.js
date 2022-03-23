import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from "./context";
import Paragraph from './Paragraph';

const CocktailList = () => {
  const {loading, cocktails} = useGlobalContext();
console.log(cocktails)

  if (loading) {
    return (
    <div>
<Loading></Loading>  
  </div>
  )
 
}
 if (cocktails.length <1 ) {
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
</div> )
 }
}

export default CocktailList
