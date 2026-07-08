import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function useCart(){
  return useContext(CartContext)
}

export function CartProvider({ children }){
  const [items, setItems] = useState([])

  useEffect(()=>{
    const raw = localStorage.getItem('cart')
    if(raw) setItems(JSON.parse(raw))
  },[])

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(items))
  },[items])

  function addItem(item){
    setItems(prev => {
      const idx = prev.findIndex(i=> i.Name === item.Name)
      if(idx > -1){
        const copy = [...prev]
        copy[idx].Qty = (copy[idx].Qty || 1) + 1
        return copy
      }
      return [...prev, { ...item, Qty: 1 }]
    })
  }

  function removeItem(name){
    setItems(prev => prev.filter(i=> i.Name !== name))
  }

  function updateQty(name, delta){
    setItems(prev => prev.map(i=> i.Name === name ? { ...i, Qty: Math.max(1,(i.Qty||1)+delta)} : i))
  }

  function clear(){ setItems([]) }

  const value = { items, addItem, removeItem, updateQty, clear }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
