import React from 'react'
import Navbar from './Navbar'
import { useCart } from '../context/CartContext'
import menuItems from '../data/menuItems'

export default function Menu(){
  const { addItem, items, updateQty, removeItem } = useCart()
  const remaining = menuItems.slice(3) // show items after the 3 featured ones
  return (
    <>
      <Navbar />
      <main id="main">
        <section id="menu_section" className="menu_page_container">
          <h1 id="menu_head">Our Menu</h1>
          <div className="menu_grid" role="list">
            {remaining.map(it=> (
              <article key={it.id} className="cardmenu" role="listitem">
                <img src={it.image} alt={it.Name} className="card-img" />
                <div className="card-content">
                  <h3 className="card-head">{it.Name}</h3>
                  <p className="card-para">Delicious {it.Name}.</p>
                  <div className="price-row">
                    <span className="price">₹{it.price}</span>
                      {
                        (()=>{
                          const found = items.find(x=> x.Name === it.Name)
                          const qty = found ? (found.Qty||0) : 0
                          return (
                            <div style={{display:'flex', alignItems:'center', gap:8}}>
                              {qty > 0 ? (
                                <>
                                  <div className="quantity-selector">
                                    <button className="qty-btn" onClick={()=> updateQty(it.Name, -1)}>-</button>
                                    <span className="qty-number">{qty}</span>
                                    <button className="qty-btn" onClick={()=> updateQty(it.Name, 1)}>+</button>
                                  </div>
                                  <button className="remove-btn" onClick={()=> removeItem(it.Name)}>Remove</button>
                                </>
                              ) : (
                                <button className="qty-btn" onClick={()=> addItem({ Name: it.Name, image: it.image, price: `₹${it.price}` })}>Add to Cart</button>
                              )}
                            </div>
                          )
                        })()
                      }
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
