import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import Error from './Error'
import Footer from './components/Footer';
import { useContext } from 'react';


// react router
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import Cart from './Cart'
import Products from './Products';
import ProductDetails from './components/ProductDetails'

import ProductDetailsPage from './ProductDetailsPage'

const App = () => {

return (
    <>
        <BrowserRouter>

        <nav className='Nav'>
        <Link to="" className='nav-title'>The Indispensable.</Link>
                    <Link to="/" className='Navbar-link'>Home</Link>
                     <Link to="/About" className='Navbar-link'>About</Link>
                     <Link to="/Products" className='Navbar-link'>Products</Link>
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
<Route  path="products/" element={<Products />}>
</Route>
<Route  path="productdetailspage/" element={<ProductDetailsPage />}>
</Route>
<Route path=":productId/productdetailspage" element={<ProductDetailsPage />}>
</Route>
<Route path=":productId/productdetailspage" element={<ProductDetailsPage />}>
</Route>


</Routes>

</BrowserRouter>
</>
)
};

export default App;

// component={<ProductDetails />}