import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='Main'>
      <h2>Oops! It's an Error!</h2>
      <br></br>
      <button className='button'><a href="/">Go back</a></button>
    </div>
  )
}

export default Error
