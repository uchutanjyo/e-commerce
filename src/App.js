import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import Error from './Error'

// react router
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import Cart from './Cart'


const App = () => {
return (
    <>
        <BrowserRouter>

        <nav className='Nav'>
                    <Link to="/" className='Navbar-link'>Home</Link>
                     <Link to="/About" className='Navbar-link'>About</Link>
                     
        <section className='cart-icons'>
                    <Link to="/Cart" className='Navbar-link'>Cart</Link>

        </section>
        </nav>
     
    
    <Routes>
<Route  path="/" element={<Home />} >
</Route>
<Route  path="about/" element={<About />}>
</Route>
<Route  path="cart/" element={<Cart />}>
</Route>
<Route  path="*" element={<Error/>}>
</Route>
</Routes>
</BrowserRouter>
</>
)
};

export default App;