import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import { ShopProvider } from "./contexts/ShopContext";


import Header from './components/Header'
import Homepage from './pages/Homepage'
import ProductListing from "./pages/ProdutListing";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import Address from "./pages/Address";
import Order from "./pages/Order";
import OrderHistory from "./pages/OrderHistory";

function App() {
  
  return (
    <ShopProvider>
      <Router>
        <Header/>
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ProductListing" element={<ProductListing />} />
          <Route path="/ProductListing/:category" element={<ProductListing />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Address" element={<Address />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/OrderHistory" element={<OrderHistory />} />
        </Routes>
      </Router>
      
    </ShopProvider>
  )
}

export default App
