import React from 'react'
import {Routes, Router, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Orders from './pages/Orders'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/product/:_id' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
