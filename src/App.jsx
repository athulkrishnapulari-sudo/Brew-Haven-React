import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import Reservation from './components/Reservation'
import Contact from './components/Contact'
import Cart from './components/Cart'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/reservation" element={<Reservation/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  )
}
