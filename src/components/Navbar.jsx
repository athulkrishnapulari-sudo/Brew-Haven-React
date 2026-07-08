import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
    const navigate = useNavigate()
    const { items } = useCart()
    const count = items.reduce((s, i) => s + (i.Qty || 0), 0)
    const [open, setOpen] = useState(false)

    function close() { setOpen(false) }

    return (
        <nav>
            <div id="navbar">
                <div id="navbar_branding">Brew Haven</div>
                <button className={`hamburger ${open ? 'active' : ''}`} id="hamburger" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
                <ul id="navigations_container" className={`navigations_container ${open ? 'active' : ''}`}>
                    <li className="nav_item"><NavLink to="/" onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                    <li className="nav_item"><NavLink to="/menu" onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>Menu</NavLink></li>
                    <li className="nav_item"><NavLink to="/reservation" onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>Reservation</NavLink></li>
                    <li className="nav_item"><NavLink to="/contact" onClick={close} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
                </ul>
                <button id="cart" onClick={() => { setOpen(false); navigate('/cart') }}> <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={"24px"}
                    height={"24px"}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg></button>
            </div>
        </nav>
    )
}
