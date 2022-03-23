import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id, image, info, glass, name }) => {
  return (
    <div>
     <h3>{name}</h3>
     <div><img className='img' src={image} alt={info} /></div>
     <div>{info}</div>
     <div>{glass}</div>
     <Link to ={`/cocktail/${id}`} className='btn'>detals</Link>
    </div>
    // returns component with the above props whcih will be taken from CocktailList after importing
  )
}

export default Cocktail
