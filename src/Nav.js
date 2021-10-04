import logo from './assets/logo.svg'
import React from 'react'
import './Nav.css'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Nav() {
    return (
        <div class="nav">
            <div className="nav_links">
                <ul id="links">
                    <li>Works</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className ="nav_logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav_icons">
                <FaLinkedin />
                <FaInstagram />
                <FaGithub />
        </div>
    </div>
    )
}

export default Nav
