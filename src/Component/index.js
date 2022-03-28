import React from 'react'
import Navbar  from './Navbar'
import ProductPage from './ProductPage'
import ProductDetails from "./ProductDetails";
import { Route, Routes } from 'react-router-dom';
import Checkout from './checkout';
import Login from './Login';


function Main() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<ProductPage />} />
      <Route path='product:id' element={<ProductDetails />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='login' element={<Login />} />
    </Routes>
    </>
  )
}

export default Main