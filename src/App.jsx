import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails'
import CartPage from './Pages/CartPage'


function App() {
 
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
       
      <Route path="/" element={<Home/>}/>
       <Route path="/product/:id" element={<ProductDetails/>}/>
       <Route path="/cart" element={<CartPage/>}/>
      


      </Routes>
    
    
    
    </BrowserRouter>
  )
}

export default App
