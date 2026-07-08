import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Reservation(){
  function submit(e){
    e.preventDefault()
    const fd = new FormData(e.target)
    const booking = {
      fullname: fd.get('fullname') || '',
      email: fd.get('emailaddress') || '',
      phone: fd.get('phonenumber') || '',
      date: fd.get('date') || '',
      time: fd.get('time') || '',
      guests: fd.get('noofguests') || ''
    }
    const bookings = JSON.parse(localStorage.getItem('bookings')||'[]')
    bookings.push(booking)
    localStorage.setItem('bookings', JSON.stringify(bookings))
    e.target.reset()
    alert('Reservation saved (demo)')
  }

  return (
    <>
      <Navbar />
      <main id="main">
        <section className="reservation_page_container">
          <h1 id="reservation_head">Reserve a Table</h1>
          <p id="reservation_para">Secure your spot in our cozy haven</p>
          <div id="reservation_form_container">
            <form action="" id="reservation_form" onSubmit={submit}>
                <div id="fullname" className="fields">
                    <label htmlFor="fullname_input">Full Name</label>
                    <input type="text" id="fullname_input" name="fullname" />
                </div>
                <div id="EmailAddress" className="fields">
                    <label htmlFor="emailaddress">Email Address</label>
                    <input type="email" id="emailaddress" name="emailaddress" />
                </div>
                <div id="phonenumber" className="fields">
                    <label htmlFor="phonenumber_input">Phone Number</label>
                    <input type="tel" pattern="[0-9]{10}" id="phonenumber_input" name="phonenumber" />
                </div>
                <div id="dateandtime" className="fields">
                    <div id="date">
                        <label htmlFor="date_input">Date</label>
                        <input type="date" id="date_input" name="date" />
                    </div>
                    <div id="time">
                        <label htmlFor="time_input">Time</label>
                        <input type="time" id="time_input" name="time" />
                    </div>
                </div>
                <div id="noofguests" className="fields">
                    <label htmlFor="noofguests_select">No of Guests</label>
                    <select id="noofguests_select" name="noofguests">
                        <option value="1">1 Guests</option>
                        <option value="2" defaultValue>2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="7+">7+ Guests</option>
                    </select>
                </div>
                <button id="confirmreservation" type="submit">Confirm Reservation</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
