import { useState, useEffect } from 'react';
import logo from '../Asset/NetFliex.png';
import './Navbar.css';

const Navbar = () => {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
            return () => {
                window.removeEventListener("scroll")
            }
        })
    }, [])

    return (
        <div className={`navbar ${show && "navbar__black"}`}>
            <div className="navbar__container">
                <img className="navbar__logo" src={logo} alt="NetFlix Logo" />
                <button className="btn btn-outline-danger">Account</button>
            </div>
        </div>
    )
}

export default Navbar