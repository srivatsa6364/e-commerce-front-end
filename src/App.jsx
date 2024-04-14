import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import ProductListing from './components/ProductListing'
import Footer from './components/Footer'
import Product from './components/Product'
import ProductDetails from './components/product-details/ProductDetails';
import Cart from './components/Cart/Cart';

function App() {
  return (

    /*
    <Router> 
      <div> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Product />} />
        </Routes>
      </div> 
    </Router> 
    */
    <div>
      <Navbar />
      <Cart />
      <Footer />
    </div>
  )
}

export default App