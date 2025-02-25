import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import CartPage from './Pages/CartPage';

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/'; // Check if on Home Page

  return (
    <>
      {isHomePage && <Navbar />} {/* Show Navbar only on Home */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default Layout;
