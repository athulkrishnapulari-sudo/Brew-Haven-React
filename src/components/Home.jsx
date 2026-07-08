import React from 'react'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useCart } from '../context/CartContext'
import menuItems from '../data/menuItems'

export default function Home(){
  const navigate = useNavigate()
  const { addItem, items, updateQty, removeItem } = useCart()
  const featured = menuItems.slice(0,3)
  return (
    <>
      <Navbar />
      <main id="main">
        <section id="hero_section">
          <div className="hero_container">
            <h1 className="hero_title">Welcome to<br/>Brew Haven</h1>
            <p className="hero_sub_title">Experience the art of coffee in a cozy, premium atmosphere</p>
            <button className="hero_menu_btn" onClick={()=> navigate('/menu')} id="hero_menu_btn">
              Explore Menu
              <svg className="hero_arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </section>
        <section id="featured">
          <div className="featured_container">
            <h1 className="featured_title">Featured Favorites</h1>
            <p className="featured_sub_title">Our most beloved creations, crafted with passion</p>
            <div className="featured_cards_container">
              {featured.map(f=> (
                <div className="card" key={f.id}>
                  <div className="card-img-cont"><img src={f.image} className="card-img" alt="" /></div>
                  <div className="card-content">
                    <h3 className="card-head">{f.Name}</h3>
                    <p className="card-para">Delicious {f.Name}.</p>
                    <div className="price-row">
                      <span>₹{f.price}</span>
                      {
                        (()=>{
                          const found = items.find(it=> it.Name === f.Name)
                          const qty = found ? (found.Qty||0) : 0
                          return (
                            <div style={{display:'flex', alignItems:'center', gap:8}}>
                              {qty > 0 ? (
                                <>
                                  <div className="quantity-selector">
                                    <button className="qty-btn" onClick={()=> updateQty(f.Name, -1)}>-</button>
                                    <span className="qty-number">{qty}</span>
                                    <button className="qty-btn" onClick={()=> updateQty(f.Name, 1)}>+</button>
                                  </div>
                                  <button className="remove-btn" onClick={()=> removeItem(f.Name)}>Remove</button>
                                </>
                              ) : (
                                <button className="qty-btn" onClick={()=> addItem({ Name: f.Name, image: f.image, price: `₹${f.price}` })}>Add to Cart</button>
                              )}
                            </div>
                          )
                        })()
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a href="/menu" id="featured_full_menu_btn">View Full Menu <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
          </div>
        </section>
        <section id="about">
          <div id="about_container">
            <img className="about_img" src="/assets/images/about.jpg" alt="" />
            <div id="about_content">
              <h2 id="about_title">A Haven for Coffee Lovers</h2>
              <p className="about_para">At Brew Haven, we believe coffee is more than just a beverage—it's an experience.
                Our expertly trained baristas craft each cup with precision and care, using only the finest
                beans sourced from sustainable farms around the world.</p>
              <p className="about_para">Step into our cozy space and discover your new favorite spot to relax, work, or catch up with
                friends. Every visit is an invitation to savor the moment.</p>
              <button id="reserve" onClick={()=> navigate('/reservation')}>Reserve a Table</button>
            </div>
          </div>
        </section>
        <section id="testimonials">
          <h2 id="testimonials_title">What Our Customers Say</h2>
          <div id="testimonials_container">
            <div className="testimonial_card">
              <p className="testimonial_quote">"Brew Haven is my go-to spot for the best coffee in town. The atmosphere is
                cozy and inviting, and the staff are always friendly. Highly recommend the Signature Latte!"</p>
              <div className="testimonial_stars">★★★★★</div>
              <span className="testimonial_author">- Sarah M.</span>
            </div>
            <div className="testimonial_card">
              <p className="testimonial_quote">"I love the variety of drinks at Brew Haven. The Cold Brew Deluxe is a must-try,
                especially on a hot day. The quality of the coffee is top-notch, and I always leave satisfied."</p>
              <div className="testimonial_stars">★★★★★</div>
              <span className="testimonial_author">- James L.</span>
            </div>
            <div className="testimonial_card">
              <p className="testimonial_quote">"Brew Haven has become my favorite place to work remotely. The Wi-Fi is reliable, and
                the ambiance is perfect for getting things done. Plus, their pastries are delicious!"</p>
              <div className="testimonial_stars">★★★★☆</div>
              <span className="testimonial_author">- Emily R.</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
