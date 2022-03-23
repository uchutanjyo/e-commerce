import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SingleCocktail from './SingleCocktail'
import Error from './Error'

// react router
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';



const App = () => {
return (
    <>
        <BrowserRouter>

        <nav className='Nav'>
                    <Link to="/" className='Navbar-link'>Home</Link>
                     <Link to="/About" className='Navbar-link'>About</Link>
        
        </nav>
     
    
    <Routes>
<Route  path="/" element={<Home />} >
</Route>
<Route  path="about/" element={<About />}>
</Route>
<Route  path="/cocktail/:id/" element={<SingleCocktail />}>
</Route>
<Route  path="*" element={<Error/>}>
</Route>
</Routes>
</BrowserRouter>
</>
)
};

export default App;