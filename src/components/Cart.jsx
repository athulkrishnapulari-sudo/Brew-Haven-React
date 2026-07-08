import React from 'react'
import Navbar from './Navbar'
import { useCart } from '../context/CartContext'

export default function Cart(){
  const { items, updateQty, removeItem, clear } = useCart()

  const total = items.reduce((s,i)=> s + ((parseInt((i.price||'').replace(/[^0-9]/g,'')) || 0) * (i.Qty||1)), 0)

  return (
    <>
      <Navbar />
      <main id="main">
        <section id="cart_section">
          <div id="cart_container">
            {items.length === 0 && <p>Your cart is empty</p>}
            {items.map((it,idx)=> (
              <div className="cardmenu" key={idx}>
                <img src={it.image} className="card-img" alt="" />
                <div className="card-content">
                  <h3 className="card-head">{it.Name}</h3>
                  <div className="price-row">
                    <span className="price">{it.price}</span>
                    <div className="quantity-selector">
                      <button className="qty-btn" onClick={()=> updateQty(it.Name, -1)}>-</button>
                      <span className="qty-number">{it.Qty}</span>
                      <button className="qty-btn" onClick={()=> updateQty(it.Name, 1)}>+</button>
                    </div>
                    <button className="remove-btn" onClick={()=> removeItem(it.Name)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
            {items.length > 0 && (
              <div className="cart-summary">
                <div>Total: ₹{total}</div>
                <button onClick={()=> { clear(); alert('Order placed (demo)') }}>Place Order</button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
