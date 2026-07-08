import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Contact(){
  return (
    <>
      <Navbar />
      <main id="main">
        <section id="contact" className="contact_page_container">
          <h1 id="reservation_head">Get in Touch</h1>
        <p id="reservation_para">We'd love to hear from you</p>
          <div id="contact_container">
            <div id="contact_left" className="contact_form_container">
              <form id="contact_form">
                <label>Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Message</label>
                <textarea id="message"></textarea>
                <div className="form-actions">
                  <button className="btn-primary" type="button" onClick={()=> alert('Message sent (demo)')}>Send</button>
                </div>
              </form>
            </div>
            <div id="contact_right">
              <div id="contact_right_top">
                <h2>Visit Us</h2>
                <div className="contact-info-grid">
                  <div className="contact-item"><strong>Address</strong><span>ABC Street, Delhi</span></div>
                  <div className="contact-item"><strong>Phone</strong><span>+91 9856XXXXXX</span></div>
                  <div className="contact-item"><strong>Email</strong><span>brewhaven@gmail.com</span></div>
                </div>
              </div>
              <div id="contact_right_bottom">
                <h3>Opening Hours</h3>
                <p>Mon - Fri: 7am - 8pm</p>
                <p>Sat - Sun: 8am - 10pm</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
